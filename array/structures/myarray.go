package structures

type MyArray struct {
	Data   []any
	Length int
}

// todo: insert
func NewMyArray() *MyArray {
	return &MyArray{
		Data:   make([]any, 0),
		Length: 0,
	}
}

func (ma *MyArray) Get(index int) any {
	return ma.Data[index]
}

func (ma *MyArray) Push(item any) int {
	ma.Data = append(ma.Data, item)
	ma.Length++
	return ma.Length
}

func (ma *MyArray) Pop() any {
	if ma.Length == 0 {
		return nil
	}
	item := ma.Data[ma.Length-1]
	// todo o array até chegar no ma.Length-1
	ma.Data = ma.Data[:ma.Length-1]
	ma.Length--
	return item
}

func (ma *MyArray) Delete(index int) any {
	item := ma.Data[index]
	// for i := index; i < ma.Length; i++ { -> O loop vai dar index out of range
	// [45, 34, 234, 545, nil]
	// como ele vai diminuindo 1, tenho sempre que acessar
	// length - 1 ---> pq o ultimo vai dar out of range
	if index >= 0 && index < ma.Length {
		for i := index; i < ma.Length-1; i++ {
			ma.Data[i] = ma.Data[i+1]
		}
		ma.Data[ma.Length-1] = nil // a ultima posição fica vazia
		ma.Length--
		return item
	} else {
		return nil
	}
}

func (ma *MyArray) Reverse() {
	// implement here
}

/*
func main() {
	strings := []string{"a", "b", "c", "d"}
	// slice header: pointer (8) + len (8) + cap (8) = 24 bytes
	// + 4 strings no backing array

	// access - O(1)
	_ = strings[2]

	// append (push) - O(1) amortizado, O(n) quando precisa crescer
	strings = append(strings, "e")

	// pop - O(1)
	strings = strings[:len(strings)-1]

	// unshift (prepend) - O(n)
	strings = append([]string{"x"}, strings...)

	// splice - O(n)
	// insert "alien" na posição 2
	strings = append(strings[:2], append([]string{"alien"}, strings[2:]...)...)

	fmt.Println(strings)
}
*/
