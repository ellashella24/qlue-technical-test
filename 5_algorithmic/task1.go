package main

import "fmt"

func getWays(arr []int, index int, num int, reducedNum int) {
	if reducedNum < 0 {
		return
	}

	if reducedNum == 0 {
		for i := 0; i < index; i++ {
			fmt.Print(arr[i], " ")
		}
		fmt.Println()
		return
	}

	var prev int

	if index == 0 {
		prev = 1
	} else {
		prev = arr[index-1]
	}

	for i := prev; i <= num; i++ {
		arr[index] = i

		getWays(arr, index+1, num, reducedNum-i)
	}

}

func findCombination(n int) {
	var arr = make([]int, n)

	getWays(arr, 0, n, n)
}

func main() {
	findCombination(4)
}
