def process_student_marks():

    print("--- Student Marks Processor ---")
    
    user_input = input("Enter student marks separated by commas (e.g., 85, 90, 45): ")
    
    # List to store valid marks
    marks = []


    # Split the string by commas to get individual items
    raw_marks = user_input.split(',')

    for item in raw_marks:
        try:
            # convert to integer
            mark = int(item.strip())
            
            # Validate marks (must between 0 and 100)
            if 0 <= mark <= 100:
                marks.append(mark)
            else:
                print(f"Warning: Ignoring invalid mark '{mark}'. Must be between 0 and 100.")
                
        except ValueError:
            #input is not a number ("abc", "90a")
            print(f"Warning: Ignoring non-numeric input '{item.strip()}'.")

    # Check if any valid marks to process
    if not marks:
        print("\nNo valid marks were entered.")
        return


    # Average mark
    total = sum(marks)
    average = total / len(marks)

    # Highest and Lowest marks
    highest = max(marks)
    lowest = min(marks)

    # Count Pass and Fail students
    # Pass mark is 50 or above
    pass_count = 0
    fail_count = 0

    for mark in marks:
        if mark >= 50:
            pass_count += 1
        else:
            fail_count += 1

    # Print results 
    print("\n--- Results ---")
    print(f"Valid Marks Processed: {marks}")
    print(f"Total Students: {len(marks)}")
    print(f"Average Mark: {average:.2f}")
    print(f"Highest Mark: {highest}")
    print(f"Lowest Mark: {lowest}")
    print(f"Passed: {pass_count}")
    print(f"Failed: {fail_count}")


if __name__ == "__main__":
    process_student_marks()
