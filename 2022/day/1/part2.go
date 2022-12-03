package main

import (
	"bufio"
	"fmt"
	"github.com/YiannisN/adventofcode/utils/heap"
	"os"
	"strconv"
	"strings"
)

func main() {
	currentCalories := 0
	caloriesHeap := heap.New([]int{})

	// Open the file for reading
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println("Failed to open file:", err)
		return
	}
	defer file.Close()

	// Create a scanner to read the file line by line
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if line == "" {
			// moving to a new elf
			caloriesHeap.Insert(currentCalories)
			currentCalories = 0
		} else {
			num, err := strconv.Atoi(strings.TrimRight(line, "\n"))
			if err != nil {
				fmt.Println("Failed to convert string to int:", err)
				return
			}
			currentCalories += num
		}
	}

	// Check for any errors that occurred while reading the file
	if err := scanner.Err(); err != nil {
		fmt.Println("Failed to read file:", err)
		return
	}

	fmt.Println("Total calories:", caloriesHeap.ExtractMax()+caloriesHeap.ExtractMax()+caloriesHeap.ExtractMax())
}
