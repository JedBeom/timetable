package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"

	"github.com/JedBeom/zego.life/models"
)

func main() {
	var subjectsAllGrade []models.Subject
	for grade := 1; grade <= 2; grade++ {
		fileName := fmt.Sprintf("parse/timetable/data/2022-1/subject_grade%d.csv", grade)
		subjects, err := run(fileName, grade)
		if err != nil {
			panic(err)
		}
		subjectsAllGrade = append(subjectsAllGrade, subjects...)
	}

	b, err := json.Marshal(subjectsAllGrade)
	if err != nil {
		panic(err)
	}

	fileName := fmt.Sprintf("parse/timetable/data/elective-subjects.json")
	err = ioutil.WriteFile(fileName, b, os.FileMode(0644))
	if err != nil {
		panic(err)
	}
}
