// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function all_nums(){
    num_arr = [];
    for (var i=1; i<=255; i++){
        num_arr.push(i);
    }
    return num_arr   
}

// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.

function even_sum(){
    sum = 0
    for (var i=0; i<=1000; i+=2){
        sum += i
    }
    return sum
}

// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.

function odd_5000(){
    sum = 0
    for (var i=1; i<=5000; i+=2){
        sum += i
    }
    return sum
}

// 4. Iterate an array - Write a function that returns the sum of all the values within an array.

function sum_array(arr){
    arr_sum = 0
    for (var i=0; i<arr.length; i++){
        arr_sum += arr[i]
    }
    return arr_sum
}

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array.

function find_max(arr){
    maximum = 0
    for (var i=0; i<arr.length; i++){
        if (arr[i] > maximum){
            maximum = arr[i]
        }
    }
    return maximum
}

// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array.

function find_avg(arr){
    sum = 0
    for (var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return (sum/arr.length)
}

// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.

function arr_odd(){
    odd_arr = []
    for (var i=1; i<=50; i+=2){
        odd_arr.push(i)
    }
    return odd_arr
}

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.

function greater_than_y(value, arr){
    counter = 0
    for (var i=0; i<arr.length; i++){
        if (value < arr[i]){
            counter += 1
        }
    }
    return counter
}

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself.

function squares(arr){
    for (var i=0; i<arr.length; i++){
        new_value = arr[i] ** 2
        arr[i] = new_value
    }
    return arr
}

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. 

function no_negs(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0
        }
    }
    return arr
}

// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. 

function stats(arr){
    maximum = 0
    minimum = arr[0]
    sum = 0
    new_arr = []
    for (var i=0; i<arr.length; i++){
        if (maximum < arr[i]){
            maximum = arr[i]
            new_arr[0] = maximum
            sum += arr[i]
        }
        else if (minimum > arr[i]){
            minimum = arr[i]
            new_arr[1] = minimum
            sum += arr[i]
        }
        else {
            new_arr[1] = minimum
            sum += arr[i]
        }
    }
    new_arr.push(sum/arr.length)
    return new_arr
}

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2.

function swap_values(arr){
    if (arr.length >= 2){
        temp_val = arr[0]
        arr[0] = arr[arr.length-1]
        arr[arr.length-1] = temp_val
        return arr
    }
    else {
        console.log("This array must be at least 2 in length!")
    }
}

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.

function num_to_string(arr){
    for (var i=0; i<arr.length; i++){
        if (arr[i] < 0){
            arr[i] = "Dojo"
        }
    }
    return arr
}

