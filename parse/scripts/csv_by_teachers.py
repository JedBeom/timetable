import argparse

parser = argparse.ArgumentParser(description='선생님 명단으로 선택과목 csv 파일을 생성합니다.')
parser.add_argument("--output", type=str, help="선택과목 csv를 저장할 경로")
parser.add_argument("--teachers", type=str, help="교사 풀 네임 텍스트 파일의 경로")

args = parser.parse_args()

ts = []
with open(args.teachers, "r") as t_file:
    for l in t_file:
        if l == "\n":
            break
        ts.append(l.rstrip())

ts = set(ts)
ts = list(ts)


with open(args.output, "w") as output:
    output.write(f'과목,과목풀네임,교사,강의실,타입\n')
    for t in ts:
        output.write(f',,{t},,\n')

print("작업을 완료했습니다.")
