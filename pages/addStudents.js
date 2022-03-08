import FlexWrapper from '../components/FlexWrapper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Main from '../components/Main'
import Nav from '../components/Nav'

import Head from 'next/head'



const handleSubmit = (e) => {
  //Pull all the data from the form
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let program = document.getElementById("program").value;
  //Take the data and create a student object
  const student = {
    firstName: firstName,
    lastName: lastName,
    program: program
  }

  //Store the student object in the html5storage
  if (localStorage.getItem('students')) {
    //The key exists
    var currentStudents = JSON.parse(localStorage.getItem('students'));
  } else {
    //If nothing exists make an empty array
    var currentStudents = [];
  }

  //Add the student
  currentStudents.push(student);
  //Store the student
  localStorage.setItem('students',JSON.stringify(currentStudents));

}
export default function addStudents() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <FlexWrapper>
        <Header>Sam Hill&apos;s Discount Student App</Header>
        <Nav></Nav>
        <Main>
            <table>
                 <tr><td>firstName</td><td><input type="text" id="firstName" value="Sam"/></td></tr>
                 <tr><td>lastName</td><input type="text" id="lastName" value="Hill"/></tr>
                 <tr><td>Program</td><td><select id="program">
                   <option value="CSTP">Computer Systems Technology Program</option>
                   <option value="ERT">Electronics Repair Technician</option>
                   <option value="FASH">Fashion Design</option></select></td></tr>
                 <tr><td colSpan="2"><button onClick={(e) => {handleSubmit()}}>Add Student</button></td></tr>
                 </table></Main>
      <Footer></Footer>
    </FlexWrapper>
    </>
  )
}
