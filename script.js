//Efficient way of doing it!
document.addEventListener('DOMContentLoaded', () => {
  // Separate logic for temperature form
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

  // Reusable function to handle form submissions for other forms since they share similar functionalities
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
})

//Other way of doing it
/* document.addEventListener('DOMContentLoaded', () => {
  // Select the form element
  const form = document.getElementById('tempForm')
  const gradeform = document.getElementById('grade')
  const evenOddForm = document.getElementById('evenOddForm')
  const ageForm = document.getElementById('ageForm')
  const yearForm = document.getElementById('yearForm')

  // Add an event listener to handle form submission
  //temperature converter
  form.addEventListener('submit', event => {
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

  //Grades
  gradeform.addEventListener('submit', event => {
    event.preventDefault()
    const gradeInput = document.getElementById('gradeInput').value
    const query = `gradeInput=${encodeURIComponent(gradeInput)}`

    fetch(`grades.php?${query}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result2').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })

  //Even Odd
  //The name of the query must match the const where the value is stored
  evenOddForm.addEventListener('submit', event => {
    event.preventDefault()
    const evenOddValue = document.getElementById('evenOddInput').value
    const query = `evenOddValue=${evenOddValue}`
    fetch(`even_or_odd.php?${query}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result3').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })

  //age price
  ageForm.addEventListener('submit', event => {
    event.preventDefault()
    const ageValue = document.getElementById('ageInput').value
    const query = `ageValue=${ageValue}`
    fetch(`ticket_price.php?${query}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result4').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })

  //age price
  yearForm.addEventListener('submit', event => {
    event.preventDefault()
    const yearValue = document.getElementById('yearInput').value
    const query = `yearValue=${yearValue}`
    fetch(`leap_year.php?${query}`)
      .then(response => response.text())
      .then(data => {
        // Update the result on the page
        document.getElementById('result5').innerText = data
      })
      .catch(error => {
        console.error('Error:', error)
      })
  })
})


 */
