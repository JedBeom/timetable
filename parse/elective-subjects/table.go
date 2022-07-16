package main

var (
	bitTable = map[string]int{
		// 선택과목
		"A": 0b000000001,
		"B": 0b000000010,
		"C": 0b000000100,
		"D": 0b000001000,
		"E": 0b000010000,
		"F": 0b000100000,
		// 예술, 교양, 외국어
		"R": 0b001000000, // a'R't
		"X": 0b010000000, // e'X'tra
		"L": 0b100000000, // foreign 'L'anguage
	}
)
