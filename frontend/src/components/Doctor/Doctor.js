import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import LoginNav from '../LoginNav/LoginNav';
function Doctor() {
  return (
    <>
    <LoginNav/>
<div class="container-fluid">
  <div className="row ">
    <div className="col-10 mx-auto ">
      <MDBRow>
      <MDBCol col='4'>
        <MDBCard narrow>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header winter-neva-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Dr. Ashok Rajgopal</h2>
            <p>Orthopaedic and Joint Replacement</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
            One of the most experienced & respected Orthopaedic surgeon in India, 
            currently working as a Group Chairman at Medanta the Medicity. 
            With a coveted experience of over 32 years, he has a ground-breaking 
            record of completing 25,000 Total Knee Replacement surgeries.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4'>
        <MDBCard narrow>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header juicy-peach-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Dr. Naresh Trehan</h2>
            <p>
              Cardiac Surgeon
            </p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center mb-3'>
            <MDBCardText>
              Currently associated as the chairman and managing director and 
              is the chief cardiac surgeon at Medanta hospital, Gurgaon.
              He is considered most successful cardiothoracic surgeon with an experience over 40 years. His experience speaks for himself
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4' className='mb-5'>
        <MDBCard>
        <MDBCardImage
            className='view white-text view-cascade gradient-card-header deep-blue-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className="h2-responsive">Dr. Suresh H. Advani</h2>
            <p>Medical Oncologist</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
              Dr. Suresh H. Advani is a medical, pediatric oncologist and 
              heamato-oncologist with 43+ years of experience. He has been 
              honored with highest civilian awards of India, namely Padma 
              Bhushan Award in 2012 and Padma Shri by Government of India in 2002.
            </MDBCardText>
            {/* <hr />
            <div className='text-center'>
              <MDBIcon fab icon='twitter' className='tw-ic mr-3' size='lg' />
              <MDBIcon
                fab
                icon='linkedin-in'
                className='li-ic my-3'
                size='lg'
              />
              <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
            </div> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
     <MDBRow>
      <MDBCol col='4'>
        <MDBCard narrow>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header sunny-morning-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Dr. Ashok Seth</h2>
            <p>Interventional Cardiologist</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
              Dr Ashok Seth is one of the most respected & coveted an interventional 
              cardiologist in India. With a thriving experience of over 32 years, he 
              is renowned for performing over 50,000 angiograms and 20,000 angioplasties.
              He has been featured in the “LIMCA” Book of records for performing one of 
              the highest numbers of angiographies and angioplasties in the world.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4'>
        <MDBCard wide>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header frozen-dreams-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive mb-2'>Dr. Sandeep Vaishya</h2>
            <p>
              Neurosurgeon
            </p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
              Dr Sandeep Vaishya is one of the finest & renowned neurosurgeons in India.
              He has a successful practice of over 22+ years & has been associated with 
              some of the best hospitals in India. Dr. Vaishya has completed his MBBS & MS 
              from the well-known G R Medical College, Gwalior. 
              Following which he did his Mch from the prestigious AIIMS, Delhi.
            </MDBCardText>
            {/* <a
              href='!#'
              className='orange-text mt-1 d-flex justify-content-end align-items-center'
            >
              <h5 className=''>
                Read more{' '}
                <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>
              </h5>
            </a> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4' className='mb-5'>
        <MDBCard>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header tempting-azure-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2>Dr. I.P.S.Oberoi</h2>
            <p>Orthopaedic and Joint Replacement</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded mb-4'>
            <MDBCardText>
              Dr. I.P.S.Oberoi is one of the best knee replacement, hip replacement and 
              arthroscopic surgeon in India specializing in all arthroscopic and joint replaement surgeries.
              Has done more than 7000 joint replacements with 97% success rates. He was the topper of AIMS BBSR in the year 1990 
            </MDBCardText>
            {/* <hr />
            <div className='text-center'>
              <MDBIcon fab icon='twitter' className='tw-ic mr-3' size='lg' />
              <MDBIcon
                fab
                icon='linkedin-in'
                className='li-ic my-3'
                size='lg'
              />
              <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
            </div> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol col='4'>
        <MDBCard narrow>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header warm-flame-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Dr. Mohamed Rela</h2>
            <p>Liver Transplant Surgeon</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
              Renowned surgeon known for his expertise on liver transplantation and 
              hepatopancreatobiliary (HPB) surgery and performed more than 3000 liver 
              transplant surgeries so far. In Dec 1997, a team led by him has done a 
              successful liver transplantation for a five-day-old girl, which made him 
              an entry into the Guinness Book of Records in 2000. Carried out the first 
              living related Liver Transplant on a patient with acute Liver Failure in the UK.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4'>
        <MDBCard wide>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header winter-neva-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive mb-2'>Dr. Randhir Sud</h2>
            <p>
              Medical Gastroenterologist
            </p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
              Dr Sud is a one of the most eminent gastroenterologist in India, who is 
              currently appointed as Chairman at Institute of Digestive and 
              Hepatobiliary Sciences, Medanta Hospital. With a mounting practise of over 
              31 years, he has established therapeutic Gastrointestinal (GI) endoscopy & GI Oncology in India.
              Some of the key areas his interst include internal medicine, disorders of digestive 
              system, gastrointestinal tract and abdominal pain.
            </MDBCardText>
            {/* <a
              href='!#'
              className='orange-text mt-1 d-flex justify-content-end align-items-center'
            >
              <h5 className=''>
                Read more{' '}
                <MDBIcon
                  icon='chevron-right'
                  className='ml-2'
                  size='sm'
                ></MDBIcon>
              </h5>
            </a> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol col='4'>
        <MDBCard>
          <MDBCardImage
            className='view white-text view-cascade gradient-card-header blue-gradient d-flex justify-content-center align-items-center flex-column p-4 rounded'
            cascade
            tag='div'
          >
            <h2 className='h2-responsive'>Dr. A. B. Govindraj</h2>
            <p>Orthopaedic and Joint Replacement</p>
            <div className='text-center'>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='facebook-f' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='twitter' size="lg"/>
              </MDBBtn>
              <MDBBtn color='purple' floating>
                <MDBIcon fab icon='google'/>
              </MDBBtn>
            </div>
          </MDBCardImage>
          <MDBCardBody cascade className='text-center mb-5 d-flex justify-content-center align-items-center flex-column p-4 rounded'>
            <MDBCardText>
              Dr A B Govindaraj is a well-known Orthopedecian and a joint replacement 
              surgeon with an experience of more than 30 years. He has expertise in 
              Orthopedic Surgery, Joint Replacement Surgery, Spine and Joint Replacement, 
              Spine Surgery, Hip Replacement Surgery, Knee Surgery, and Pediatric Orthopedics.
            </MDBCardText>
            {/* <hr />
            <div className='text-center'>
              <MDBIcon fab icon='twitter' className='tw-ic mr-3' size='lg' />
              <MDBIcon
                fab
                icon='linkedin-in'
                className='li-ic my-3'
                size='lg'
              />
              <MDBIcon fab icon='facebook-f' className='fb-ic ml-3' size='lg' />
            </div> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
    </div>
</div>
</>
  )
}

export default Doctor;