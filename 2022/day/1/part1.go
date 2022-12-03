package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	currentCalories := 0
	maxCalories := 0

	// Open the file for reading
	file, err := os.Open("input.txt")
	if err != nil {
		fmt.Println("Failed to open file:", err)
		return
	}
	defer file.Close()

	// Create a scanner to read the file line by line
	scanner := bufio.NewScanner(file)

	// Read each line of the file and print it
	for scanner.Scan() {
		line := scanner.Text()
		if line == "" {
			// moving to a new elf
			if currentCalories > maxCalories {
				maxCalories = currentCalories
			}
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

	fmt.Println("Max calories:", maxCalories)
}
