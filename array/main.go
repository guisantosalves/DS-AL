package main

import (
	"fmt"
	"slices"
	"strings"

	"github.com/guisantosalves/array/structures"
)

func reversingAStr(str string) string {
	arrSplited := strings.Split(str, "")
	slices.Reverse(arrSplited)
	return strings.Join(arrSplited, "")
}

func main() {

	myCurrArr := structures.NewMyArray()
	myCurrArr.Push(20)
	myCurrArr.Push(30)
	myCurrArr.Push(40)
	myCurrArr.Push(50)

	fmt.Printf("myarr: %v", myCurrArr)
	myCurrArr.Delete(1)
	fmt.Printf("myarr: %v", myCurrArr)

	fmt.Print(reversingAStr("exemplo"))
}
