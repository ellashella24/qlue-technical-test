package main

import "fmt"

func getShape(input int) string {
	var res string

	if input%2 == 0 && input%3 == 0 {
		res = "CIRCLE STAR"
	} else if input%2 == 0 {
		res = "CIRCLE"
	} else if input%3 == 0 {
		res = "STAR"
	} else {
		res = "Null"
	}

	return res
}

func main() {
	fmt.Println(getShape(5))
	fmt.Println(getShape(6))
	fmt.Println(getShape(9))
}
