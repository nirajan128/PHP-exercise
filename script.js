//Efficient way of doing it!
document.addEventListener('DOMContentLoaded', () => {
  // Separate logic for temperature form 1
  const tempForm = document.getElementById('tempForm')
  tempForm.addEventListener('submit', event => {
    event.preventDefault() // Prevent the default form submission

    // Get input values
    const tempInput = document.getElementById('temp').value
    const featureEnabled = document.getElementById('featureEnabled').checked
    console.log(featureEnabled)

    // Create a query string
    const queryString = `temp=${encodeURIComponent(tempInput)}&featureEnabled=${
      featureEnabled ? '1' : '0'
    }`

    // Make an AJAX request to the PHP script
    fetch(`temperature_conversion.php?${queryString}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })

  // Reusable function to handle form submissions for other forms[2,3,4,5,6,7] since they share similar functionalities
  const handleFormSubmit = (formId, inputId, resultId, phpFile, queryParam) => {
    const form = document.getElementById(formId)
    form.addEventListener('submit', event => {
      event.preventDefault()
      const inputValue = document.getElementById(inputId).value
      const query = `${queryParam}=${encodeURIComponent(inputValue)}`

      fetch(`${phpFile}?${query}`)
        .then(response => response.text())
        .then(data => {
          // Update the result on the page
          document.getElementById(resultId).innerText = data
        })
        .catch(error => {
          console.error('Error:', error)
        })
    })
  }

  // Call the reusable function for the other forms
  handleFormSubmit('grade', 'gradeInput', 'result2', 'grades.php', 'gradeInput')
  handleFormSubmit(
    'evenOddForm',
    'evenOddInput',
    'result3',
    'even_or_odd.php',
    'evenOddValue'
  )
  handleFormSubmit(
    'ageForm',
    'ageInput',
    'result4',
    'ticket_price.php',
    'ageValue'
  )
  handleFormSubmit(
    'yearForm',
    'yearInput',
    'result5',
    'leap_year.php',
    'yearValue'
  )
  handleFormSubmit('dowForm', 'dowInput', 'result6', 'dow.php', 'dowValue')
  handleFormSubmit(
    'factorialForm',
    'factorialInput',
    'result7',
    'factorial.php',
    'factorialValue'
  )

  //A bit advance problems

  //Multiplication table
  const evenListForm = document.getElementById('evenListForm')

  function multipleHandleFormSubmit (
    formId,
    inputId1,
    inputId2,
    resultId,
    phpFile,
    queryParam1,
    queryParam2
  ) {
    const theForm = document.getElementById(formId)

    theForm.addEventListener('submit', event => {
      event.preventDefault()
      const inputValue1 = document.getElementById(inputId1).value
      const inputValue2 = document.getElementById(inputId2).value
      const query = `${queryParam1}=${inputValue1}&${queryParam2}=${inputValue2}`
      fetch(`${phpFile}?${query}`)
        .then(response => response.text())
        .then(data => {
          // Update the result on the page
          document.getElementById(resultId).innerHTML = data
        })
        .catch(error => {
          console.error('Error:', error)
        })
    })
  }

  //for multiplication table
  multipleHandleFormSubmit(
    'multForm',
    'multInput1',
    'multInput2',
    'result8',
    'mult_table.php',
    'startInput',
    'endInput'
  )

  //even list
  multipleHandleFormSubmit(
    'evenListForm',
    'evenListInput1',
    'evenListInput2',
    'result9',
    'even_list.php',
    'startInput',
    'endInput'
  )

  //Dice Rolling functions
  function diceRoller (formId, resultId, phpFile) {
    const theForm = document.getElementById(formId)
  }
})
