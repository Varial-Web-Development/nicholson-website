import { useState } from "react";
import Layout from "../../components/layouts/standard-page";

export default function CareersApplyPage() {
  const [employers, setEmployers] = useState([])
  const [loading, setLoading] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const { 
      firstName, 
      middleInitial, 
      lastName,
      emailAddress,
      phoneNumber,
      streetAddress,
      city,
      state,
      zipCode,
      currentAddressLength,
      previousAddress,
      eligableInUS,
      olderThan18,
      militaryService,
      veteran,
      position,
      heardFrom,
      expectedHourly,
      expectedWeeklyEarnings,
      dateAvailable,
      unableToPerformJobDuties,
      driversLicenseNumber,
      driversLicenseState,
      drivingViolations,
    } = event.target

    const application = {
      firstName: firstName.value,
      middleInitial: middleInitial.value,
      lastName: lastName.value,
      emailAddress: emailAddress.value,
      phoneNumber: phoneNumber.value,
      streetAddress: streetAddress.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
      currentAddressLength: currentAddressLength.value,
      previousAddress: previousAddress.value,
      eligableInUS: eligableInUS.value,
      olderThan18: olderThan18.value,
      militaryService: militaryService.value,
      veteran: veteran.value,
      position: position.value,
      heardFrom: heardFrom.value,
      expectedHourly: expectedHourly.value,
      expectedWeeklyEarnings: expectedWeeklyEarnings.value,
      dateAvailable: dateAvailable.value,
      unableToPerformJobDuties: unableToPerformJobDuties.value,
      driversLicenseNumber: driversLicenseNumber.value,
      driversLicenseState: driversLicenseState.value,
      drivingViolations: drivingViolations.value,
      employers,
    }

    setLoading(true)

    // console.log('submit', application)
    fetch('/api/forms/job-application', {
      method: 'POST',
      body: JSON.stringify({...application})
    })
      .then(response => response.json())
      .then(response => {
        setLoading(false)
      })
      .catch(error => console.error('Fetch error', error))
  }

  return (
    <Layout>
      <main className="section grid place-items-center bg-gradient-to-b from-nicholson-blue-500 to-nicholson-green-500">
        <section className="flex flex-col gap-8 bg-white rounded-md shadow w-full max-w-[860px] p-4 md:p-8">
          <h1 className="text-center text-3xl md:text-5xl max-w-[20ch] mx-auto lg:w-fit leading-tight">Employment Application</h1>
          <form onSubmit={handleSubmit} className="flex flex-col items-start w-full gap-8">
            <fieldset className="border border-slate-300 p-4 lg:p-8 rounded-md w-full grid gap-8 lg:gap-8">
              <legend className="text-lg font-medium">Personal Information</legend>
              <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:gap-8 lg:justify-between">
                <label htmlFor="firstName" className="grid">
                  First name *
                  <input 
                    id="firstName"
                    name="firstName"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="middleInitial" className="grid">
                  Middle Initial
                  <input 
                    id="middleInitial"
                    name="middleInitial"
                    className="w-[4ch] border"
                  />
                </label>
                <label htmlFor="lastName" className="grid">
                  Last name *
                  <input 
                    id="lastName"
                    name="lastName"
                    className="border"
                    required
                  />
                </label>
              </div>
              <hr />
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-8">
                <label htmlFor="emailAddress" className="grid">
                  Email address *
                  <input 
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="phoneNumber" className="grid">
                  Phone number *
                  <input 
                    id="phoneNumber"
                    name="phoneNumber"
                    className="border"
                  />
                </label>
              </div>
              <hr />
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-8">
                <label htmlFor="streetAddress" className="grid">
                  Street address *
                  <input 
                    id="streetAddress"
                    name="streetAddress"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="city" className="grid">
                  City *
                  <input 
                    id="city"
                    name="city"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="state" className="grid">
                  State *
                  <input 
                    id="state"
                    name="state"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="zipCode" className="grid">
                  Zip *
                  <input 
                    id="zipCode"
                    name="zipCode"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="currentAddressLength" className="grid">
                  How long at current address? *
                  <input 
                    id="currentAddressLength"
                    name="currentAddressLength"
                    className="border"
                    required
                  />
                </label>
                <label htmlFor="previousAddress" className="grid">
                  What was your previous address?
                  <input 
                    id="previousAddress"
                    name="previousAddress"
                    className="border"
                  />
                </label>
              </div>
              <hr />
              <fieldset className="flex gap-4 items-center py-2">
                <legend>Are you eligable to work in the United States?</legend>
                <label className="flex gap-1.5 items-center">
                  Yes
                  <input 
                    type="radio"
                    id="eligableInUS"
                    name="eligableInUS"
                    value="yes"
                  />
                </label>
                <label className="flex gap-1.5 items-center">
                  No
                  <input 
                    type="radio"
                    id="ineligableInUS"
                    name="eligableInUS"
                    value="no"
                    defaultChecked={true}
                  />
                </label>
              </fieldset>
              <fieldset className="flex gap-4 items-center py-2">
                <legend>Are you 18 years or older?</legend>
                <label htmlFor="olderThan18" className="flex gap-1.5 items-center">
                  Yes
                  <input 
                    type="radio"
                    id="olderThan18"
                    name="olderThan18"
                    value="yes"
                  />
                </label>
                <label htmlFor="youngerThan18" className="flex gap-1.5 items-center">
                  No
                  <input 
                    type="radio"
                    id="youngerThan18"
                    name="olderThan18"
                    value="no"
                    defaultChecked={true}
                  />
                </label>
              </fieldset>
              <fieldset className="flex gap-4 items-center py-2">
                <legend>Military service?</legend>
                <label htmlFor="militaryService" className="flex gap-1.5 items-center">
                  Yes
                  <input 
                    type="radio"
                    id="militaryService"
                    name="militaryService"
                    value="yes"
                  />
                </label>
                <label htmlFor="noMilitaryService" className="flex gap-1.5 items-center">
                  No
                  <input 
                    type="radio"
                    id="noMilitaryService"
                    name="militaryService"
                    value="no"
                    defaultChecked={true}
                  />
                </label>
              </fieldset>
              <fieldset className="flex gap-4 items-center py-2">
                <legend>Are you a veteran?</legend>
                <label htmlFor="veteran" className="flex gap-1.5 items-center">
                  Yes
                  <input 
                    type="radio"
                    id="veteran"
                    name="veteran"
                    value="yes"
                  />
                </label>
                <label htmlFor="notVetern" className="flex gap-1.5 items-center">
                  No
                  <input 
                    type="radio"
                    id="notVeteran"
                    name="veteran"
                    value="no"
                    defaultChecked={true}
                  />
                </label>
              </fieldset>
              <hr />
              <div className="grid lg:grid-cols-2 gap-8">
                <label htmlFor="position" className="grid">
                  What position are you applying for? *
                  <input 
                    id="position"
                    name="position"
                    required
                    className="border"
                  />
                </label>
                <label htmlFor="heardFrom" className="grid">
                  How did you hear about this position? *
                  <input 
                    id="heardFrom"
                    name="heardFrom"
                    required
                    className="border"
                  />
                </label>
                <label htmlFor="expectedHourly" className="grid">
                  Expected hourly rate? *
                  <input 
                    type="number"
                    step="0.01"
                    min="14.49"
                    id="expectedHourly"
                    name="expectedHourly"
                    required
                    className="border"
                  />
                </label>
                <label htmlFor="expectedWeeklyEarnings" className="grid">
                  Expected weekly earnings? *
                  <input 
                    type="number"
                    step="0.01"
                    min="14.49"
                    id="expectedWeeklyEarnings"
                    name="expectedWeeklyEarnings"
                    required
                    className="border"
                  />
                </label>
              </div>
              <hr />
              <div className="grid gap-4 lg:gap-8">
                <label htmlFor="dateAvailable">
                  Date available?
                  <input 
                    type="date"
                    id="dateAvailable"
                    name="dateAvailable"
                    // onChange={event => console.log(new Date(event.target.value).toDateString())}
                    className="border w-full"
                    required
                  />
                </label>
                <fieldset className="flex gap-4 items-center py-2">
                  <legend>Have you ever applied for employment with us?</legend>
                  <label htmlFor="previouslyApplied" className="flex gap-1.5 items-center">
                    Yes
                    <input 
                      type="radio"
                      id="previouslyApplied"
                      name="previouslyApplied"
                      value="yes"
                      className="border"
                    />
                  </label>
                  <label htmlFor="didNotPreviouslyAppy" className="flex gap-1.5 items-center">
                    No
                    <input 
                      type="radio"
                      id="didNotPreviouslyApply"
                      name="previouslyApplied"
                      value="no"
                      defaultChecked
                      className="border"
                    />
                  </label>
                </fieldset>
                <label htmlFor="previouslyAppliedDate" className="grid">
                  If yes, month and year:
                  <input
                    id="previouslyAppliedDate"
                    name="previouslyAppliedDate"
                    className="border"
                  />
                </label>
              </div>
              <hr />
              <label htmlFor="unableToPerformJobDuties" className="grid">
                Are there any reasons for which you might not be able to perform the job duties (reasonable accommodation)?
                <textarea 
                  id="unableToPerformJobDuties"
                  name="unableToPerformJobDuties"
                  rows="4"
                  className="border"
                />
              </label>
              <hr />
              <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
                <label htmlFor="driversLicenseNumber" className="grid">
                  Drivers license number
                  <input 
                    id="driversLicenseNumber"
                    name="driversLicenseNumber"
                    className="border"
                  />
                </label>
                <label htmlFor="driversLicenseState" className="grid">
                  State
                  <input 
                    id="driversLicenseState"
                    name="driversLicenseState"
                    className="border"
                  />
                </label>
                <label htmlFor="drivingViolations" className="grid col-span-2">
                  Any driving violations?
                  <textarea 
                    id="drivingViolations"
                    name="drivingViolations"
                    rows="4"
                    className="border"
                  />
                </label>
              </div>
            </fieldset>
            <fieldset className="border border-slate-300 p-4 lg:p-8 rounded-md w-full grid gap-8 lg:gap-8">
              <legend className="text-lg font-medium">Prior Work Experience</legend>
              {employers.map((employer, index) => (
                <div key={`employer_${index}`} className="border p-4 bg-slate-50 rounded-md grid lg:grid-cols-2 gap-4">
                  <label htmlFor={`employer_${index}_name`} className="grid">
                    Employer
                    <input 
                      id={`employer_${index}_name`}
                      value={employer.name}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          name: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_address`} className="grid">
                    Address
                    <input 
                      id={`employer_${index}_address`}
                      value={employer.address}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          address: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_city`} className="grid">
                    City
                    <input 
                      id={`employer_${index}_city`}
                      value={employer.city}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          city: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_state`} className="grid">
                    State
                    <input 
                      id={`employer_${index}_state`}
                      value={employer.state}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          state: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_zip`} className="grid">
                    Zip
                    <input 
                      id={`employer_${index}_zip`}
                      value={employer.zip}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          zip: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_supervisor`} className="grid">
                    Name of immediate supervisor
                    <input 
                      id={`employer_${index}_supervisor`}
                      value={employer.supervisor}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          supervisor: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_phone`} className="grid">
                    Phone number
                    <input 
                      id={`employer_${index}_phone`}
                      value={employer.phone}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          phone: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <label htmlFor={`employer_${index}_position`} className="grid">
                    Position / Job title
                    <input 
                      id={`employer_${index}_position`}
                      value={employer.position}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = { ...employer, position: event.target.value,}
                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  <hr className="col-span-2" />
                  <fieldset className="flex gap-4 items-center py-2">
                    <legend>Is this your current employer?</legend>
                    <label htmlFor={`employer_${index}_currentEmployer`} className="flex items-center gap-1.5">
                      Yes
                      <input 
                        type="radio"
                        id={`employer_${index}_currentEmployer`}
                        name="currentEmployer"
                        checked={employer.current}
                        onClick={() => {
                          let newEmployers = [...employers]
                          newEmployers[index] = { ...employer, current: true }
                          setEmployers([...newEmployers])
                        }}
                      />
                    </label>
                    <label htmlFor={`employer_${index}_previousEmployer`} className="flex items-center gap-1.5">
                      No
                      <input 
                        type="radio"
                        id={`employer_${index}_previousEmployer`}
                        name="currentEmployer"
                        checked={!employer.current}
                        onClick={() => {
                          let newEmployers = [...employers]
                          newEmployers[index] = { ...employer, current: false, endDate: '' }
                          setEmployers([...newEmployers])
                        }}
                      />
                    </label>
                  </fieldset>
                  <fieldset className="flex gap-4 items-center py-2">
                    <legend>Can we contact?</legend>
                    <label htmlFor={`employer_${index}_canContact`} className="flex items-center gap-1.5">
                      Yes
                      <input 
                        type="radio"
                        id={`employer_${index}_canContact`}
                        name="canContact"
                        checked={employer.canContact}
                        onClick={() => {
                          let newEmployers = [...employers]
                          newEmployers[index] = { ...employer, canContact: true }
                          setEmployers([...newEmployers])
                        }}
                      />
                    </label>
                    <label htmlFor={`employer_${index}_cantContact`} className="flex items-center gap-1.5">
                      No
                      <input 
                        type="radio"
                        id={`employer_${index}_cantContact`}
                        name="canContact"
                        checked={!employer.canContact}
                        onClick={() => {
                          let newEmployers = [...employers]
                          newEmployers[index] = { ...employer, canContact: false }
                          setEmployers([...newEmployers])
                        }}
                      />
                    </label>
                    
                  </fieldset>
                  <label htmlFor={`employer_${index}_startDate`} className="grid">
                    Start Date
                    <input 
                      type="date"
                      id={`employer_${index}_startDate`}
                      value={employer.startDate}
                      onChange={event => {
                        let newEmployers = [...employers]
                        newEmployers[index] = {
                          ...employer,
                          startDate: event.target.value,
                        }

                        setEmployers([...newEmployers])
                      }}
                      className="border"
                    />
                  </label>
                  {!employer.current && (
                    <>
                      <label htmlFor={`employer_${index}_endDate`} className="grid">
                        End Date
                        <input 
                          type="date"
                          id={`employer_${index}_endDate`}
                          value={employer.endDate}
                          onChange={event => {
                            let newEmployers = [...employers]
                            newEmployers[index] = { ...employer, endDate: event.target.value, }
                            setEmployers([...newEmployers])
                          }}
                          className="border"
                        />
                      </label>
                      <label htmlFor={`employer_${index}_reasonForLeaving`} className="grid col-span-2">
                        Reason for leaving
                        <textarea 
                          id={`employer_${index}_reasonForLeaving`}
                          value={employer.reasonForLeaving}
                          onChange={event => {
                            let newEmployers = [...employers]
                            newEmployers[index] = { ...employer, reasonForLeaving: event.target.value, }
                            setEmployers([...newEmployers])
                          }}
                          className="border"
                        />
                      </label>
                      
                    </>
                  )}
                  
                </div>
              ))}
              {employers.length < 3 && (
                <button
                  onClick={event => {
                    event.preventDefault()

                    let newEmployers = [...employers]
                    newEmployers.push({
                      name: '',
                      address: '',
                      city: '',
                      state: '',
                      zip: '',
                      supervisor: '',
                      phone: '',
                      startDate: '',
                      endDate: '',
                      current: false,
                      position: '',
                      reasonForLeaving: '',
                      canContact: false,
                    })

                    setEmployers([...newEmployers])
                  }}
                  className="text-nicholson-blue-500 border border-nicholson-blue-500 rounded-full p-4 px-12 lg:w-fit"
                >
                  Add work experience
                </button>
              )}
            </fieldset>
            <button className="bg-nicholson-blue-500 p-4 px-12 lg:w-fit rounded-full text-white">Submit application</button>
          </form>
        </section>
      </main>
    </Layout>
  )
}
