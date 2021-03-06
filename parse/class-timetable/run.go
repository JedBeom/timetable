package main

import (
	"log"

	"github.com/JedBeom/zego.life/parse/timetable/common"

	"github.com/JedBeom/zego.life/models"
)

func Run(path string) (timetablesByGrades [][]models.ClassTimetable) {
	r, err := common.LoadAndReadCSV(path)
	if err != nil {
		panic(err)
	}

	byGrades, err := splitByGrade(r)
	if err != nil {
		panic(err)
	}

	for grade, byGrade := range byGrades {
		byClasses, err := splitByClass(byGrade)
		if err != nil {
			panic(err)
		}

		var timetablesByClasses []models.ClassTimetable

		for class, byClass := range byClasses {
			timetable := models.ClassTimetable{
				Grade: grade + 1,
				Class: class + 1,
			}

			for weekday, byWeekday := range splitByDay(byClass) {
				SubjectsInADay, err := getLessonsDay(grade, weekday, byWeekday)
				if err != nil {
					log.Fatalln(grade, class, weekday, byWeekday, err)
				}

				timetable.Subjects = append(timetable.Subjects, SubjectsInADay)
			}

			timetablesByClasses = append(timetablesByClasses, timetable)
		}

		timetablesByGrades = append(timetablesByGrades, timetablesByClasses)

	}

	return
}
