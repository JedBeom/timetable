package main

import (
	"errors"
	"io"

	"github.com/JedBeom/zego.life/models"
	"github.com/JedBeom/zego.life/parse/timetable/common"
)

var ID = 0

func run(path string, grade int) (subjects []models.Subject, err error) {
	r, err := common.LoadAndReadCSV(path)
	if err != nil {
		return
	}

	_, _ = r.Read() // header

	for i := 0; true; i++ {
		line, err := r.Read()
		if err == io.EOF {
			break
		} else if err != nil {
			return nil, err
		} else if len(line) != 5 {
			err = errors.New("columns should be 5")
			return nil, err
		}

		subject := models.Subject{
			ID:        ID,
			Grade:     grade,
			ShortName: line[0],
			FullName:  line[1],
			Teacher:   line[2],
			Room:      line[3],
		}

		for _, x := range line[4] {
			subject.AvailableBit |= bitTable[string(x)]
		}

		subjects = append(subjects, subject)
		ID++
	}

	return
}
