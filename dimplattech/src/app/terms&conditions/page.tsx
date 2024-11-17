import Header2 from '@/components/Header2'
import React from 'react'

export default function page() {
  return (
    <main>
        <Header2 />
        <section className='px-[5%] py-8 md:py-12 xl:py-16 text-center'>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Dimplattech</p>
            <p className='text-2xl lg:text-4xl text-[#219dd0] font-semibold mb-5'>Terms And Condition</p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Payment Policy</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                Unless otherwise agreed, every student pays an upfront tuition fee, 
                which is determined by the management of Dimplattech LTD in order to 
                secure their admission into Dimplattech Academy. This applies to all academic programs. 
                Students shall either opt into the Full Payment Plan or Part-Payment Plan (if it is available) in order to secure their admission into the Academy.
            </p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Diploma Courses</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                Unless otherwise agreed, students under the Part-Payment Plan must 
                pay an upfront deposit of at least 50% of agreed tuition, with an 
                additional 30% installation due and payable NOT LATER THAN FOUR (4) 
                WEEKS from the commencement of their course. A final 20% of the tuition 
                is due and payable on the very first week of the Second Semester of the course.
            </p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Defaults</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                Students who fail to comply with the payment structure and timeline above 
                may be suspended from accessing Dimplattech's classroom and learning resources pending their complete compliance. This policy however, will take effect if after two.(2) consecutive payment reminders from the management, the student fails, refuses and, or neglects to comply.
            </p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Rollover & Deferment</p>
            <p className='text-base lg:text-lg font-semibold mb-2'>
               Students are allowed to rolled their admission to the next cohort provided that the following conditions are met: 
            </p>
            <p className='text-base lg:text-lg font-semibold mb-2'>
                - The student can no longer meet up with schedule and obligations of the academic program due to personal or 
                professional commitments that precludes hin/her from meeting up with requirements of their program
            </p>
            <p className='text-base lg:text-lg font-semibold mb-2'>
                Any student who wishes to rollover his/her admission must undergo the following process:
            </p>
            <p className='text-base lg:text-lg font-semibold mb-2'>
                Inform the management of their intention by sending an email to 
                {" "}<a href='mailto:support@dimplattech' className='text-[#219dd0] underline hover:no-underline'>support@dimplattech</a> detailing their reason, 
                and proposed cohort to resume their studies,you will be contacted and walked through the process for deferment.
            </p>
            <p className='text-base lg:text-lg font-semibold mb-2'>
                - Complete his/her tuition for the current registered cohort.
            </p>
            <p className='text-base lg:text-lg font-semibold mb-2'>
                - If the student has completed up to two (2) classes during the current program, the student must then pay a deferment fee of additional 15% of original tuition along with any outstanding amount left on their original tuition.
            </p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                Any student who has taken over 2 classes on the current program is NO LONGER eligible for deferment and NO REFUND WILL BE PROCESSED.
            </p>
            <p className='text-xl lg:text-2xl font-semibold mb-16'>Cohort Cancellation</p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Attendance</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                Every student is required to attend and complete classes that are held during their program. Dimplattech will bear no liability for 
                lack of comprehension, poor performance or inability to complete the student's academic program which may be as a result of incomplete attendance record.
            </p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                In the event a student is unable to meet up with classes for a day, they must send a notice to the mentor in charge of his or her class or Dimplattech Management
                about their absence.
            </p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Make-Up Class</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>Students are eligible to request a makeup class if they fall under the following categories:</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>- The student was unable to meet up with the class due to personal or professional commitments.</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>- The student made adequate effort to notify the mentor or Dimplattech Management about their absence.</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>- The student is unable to keep pace with the class(es) and would like request a remedial session to keep oace with the program.</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>Students who are eligible for a make-up class will be contacted and with a proposed date and time for</p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Projects</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>Every student is required to complete a minimum of 2 capstone projects during program. Unless otherwise stated, this is prerequisite for graduation and certification at the end of the program. Dimplattech may withhold your certificate pending the completion and approval of all your projects.</p>
            <p className='text-xl lg:text-2xl font-semibold mb-3'>Certifications</p>
            <p className='text-base lg:text-lg font-semibold mb-3'>
                Upon completion of the program and upon fulfilling all academic requirements, students shall be
                issued a verifible <span>Professional Diploma</span> depending on the program the student has opted into which may come in physical or digitsl format. 
            </p>
        </section>
    </main>
  )
}
