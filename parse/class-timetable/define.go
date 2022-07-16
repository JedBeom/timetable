package main

var (
	lineNoByGrade = []int{8 * 2, 8*2 + 8*2, 8*2 + 8*2 + 8*2} // 반의 수*2 (과목명 한줄, 교사 한줄)

	electiveSubjectBitTable = map[string]int{
		// 선택과목
		"선A": 0b000000001,
		"선B": 0b000000010,
		"선C": 0b000000100,
		"선D": 0b000001000,
		"선E": 0b000010000,
		"선F": 0b000100000,
		// 예술, 교양, 외국어
		"음미": 0b001000000, // a'R't
		"교양": 0b010000000, // 'E'xtra
		"외국": 0b100000000, // foreign 'L'anguage
	}

	eightTH = []string{
		"방과", "방과", "방과", "방과", "방과",
	}
)
