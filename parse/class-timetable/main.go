package main

import (
	"encoding/json"
	"flag"
	"io/ioutil"
	"os"
)

// 설명이 없는 grade 필드 또는 변수는 0부터 시작한다.
/*
시간표의 구조
---
..............월.............................화

...........1교시 2교시           (생략)       1교시 2교시
1학년) 1반) 과목명 과목명                      과목명
...........교사명 교사명                      교사명
...........과목명 과목명                      과목명
...........교사명 교사명                      교사명
*/

func main() {
	pathPtr := flag.String("path", "", "시간표 csv 파일 경로")

	flag.Parse()
	if *pathPtr == "" {
		panic("No path")
	}

	timetablesByGrades := Run(*pathPtr)
	b, err := json.Marshal(timetablesByGrades)
	if err != nil {
		panic(err)
	}

	err = ioutil.WriteFile("data/2022-1/class-timetables.json", b, os.FileMode(0644))
	if err != nil {
		panic(err)
	}

}
