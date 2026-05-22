package main

import (
	"fmt"
	"slices"
	"strings"
)

func reversingAStr(str string) string {
	arrSplited := strings.Split(str, "")
	slices.Reverse(arrSplited)
	return strings.Join(arrSplited, "")
}

func reversingAStr2(str string) string {
	strSplited := strings.Split(str, "")
	reversedArr := []string{}
	for i := (len(strSplited) - 1); i >= 0; i-- {
		reversedArr = append(reversedArr, strSplited[i])
	}
	return strings.Join(reversedArr, "")
}

func mergeSortedArr(arr1, arr2 []int) []int {
	if len(arr1) == 0 {
		return arr2
	}
	if len(arr2) == 0 {
		return arr1
	}

	mergedArr := []int{}
	i := 0
	j := 0

	for i < len(arr1) && j < len(arr2) {
		if arr1[i] < arr2[j] {
			mergedArr = append(mergedArr, arr1[i])
			i++
		} else {
			mergedArr = append(mergedArr, arr2[j])
			j++
		}
	}

	mergedArr = append(mergedArr, arr1[i:]...)
	mergedArr = append(mergedArr, arr2[j:]...)

	return mergedArr
}

func main() {

	// myCurrArr := structures.NewMyArray()
	// myCurrArr.Push(20)
	// myCurrArr.Push(30)
	// myCurrArr.Push(40)
	// myCurrArr.Push(50)

	// fmt.Printf("myarr: %v", myCurrArr)
	// myCurrArr.Delete(1)
	// fmt.Printf("myarr: %v", myCurrArr)

	// fmt.Print(reversingAStr2("exemplo"))
	fmt.Print(mergeSortedArr([]int{0, 3, 4, 31}, []int{4, 6, 30}))
}
