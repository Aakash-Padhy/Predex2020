import React, { Component }  from "react";
import {useState} from 'react';
import { render } from "react-dom";
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import Draggable from 'react-draggable';
import {Modal,Progress} from 'antd';
import LoginNav from '../LoginNav/LoginNav'
import { Row, Col } from 'antd';
import { Select } from 'antd';
import sympimg from './medicine.png';
import sympimgb from './Fever.png';
import './Symptomp.css';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const { Option } = Select;

const StyledButton1 = withStyles({
  root: {
    background: 'linear-gradient(45deg, #070F83 30%, #21CBF3 98%)',
    borderRadius: 15,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginTop: 20,
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


function Symptom() {
let [visible, setVisible]=useState(false);
let [disabled, setDisabled]=useState(true);
let [result,setResult]=useState("");
let [finalresult,setFinalresult]=useState("");
let [result1,setResult1]=useState("");
let [result2,setResult2]=useState("");
let [result3,setResult3]=useState("");


var disease=['Fungal infection','Allergy','GERD','Chronic cholestasis','Drug Reaction','Peptic ulcer diseae','AIDS','Diabetes ','Gastroenteritis','Bronchial Asthma','Hypertension ','Migraine','Cervical spondylosis','Paralysis (brain hemorrhage)','Jaundice','Malaria','Chicken pox','Dengue','Typhoid','hepatitis A','Hepatitis B','Hepatitis C','Hepatitis D','Hepatitis E','Alcoholic hepatitis','Tuberculosis','Common Cold','Pneumonia','Dimorphic hemmorhoids(piles)','Heart attack','Varicose veins','Hypothyroidism','Hyperthyroidism','Hypoglycemia','Osteoarthristis','Arthritis','(vertigo) Paroymsal  Positional Vertigo','Acne','Urinary tract infection','Psoriasis','Impetigo']

var count=[27, 192, 17, 10, 37, 175, 23, 91, 22, 34, 19, 54, 8, 4, 18, 38, 0, 39, 18, 11, 11, 43, 130,
 4, 9, 8, 99, 11, 47, 6, 31, 16, 15, 82, 10, 73, 0, 45, 9, 9, 30, 55, 3, 130, 22, 22, 44, 36, 
23, 172, 16, 6, 8, 39, 29, 3, 189, 8, 18, 6, 13, 2, 13, 8, 74, 3, 35, 14, 5, 15, 15, 120, 18, 
27, 24, 128, 3, 37, 5, 26, 91, 37, 31, 44, 16, 36, 12, 16, 10, 2, 66, 72, 3, 10, 14, 31, 46, 9, 
40, 48, 10, 20, 60, 7, 3, 17, 3, 51, 13, 50, 14, 40, 1, 9, 60, 17, 35, 9, 41, 101, 13, 13, 44,
 5, 21, 55, 117, 20, 115, 6, 0, 57, 46, 12, 28, 8, 74, 6, 12, 115, 55, 48, 3, 55, 47, 1, 4, 30, 44, 1, 16, 10, 11]

var symp=['itching, skin rash, nodal skin eruptions, dischromic patches','continuous sneezing, shivering, chills, watering from eyes','stomach pain, acidity, ulcers on tongue, vomiting, cough, chest pain','itching, vomiting, yellowish skin, nausea, loss of appetite, abdominal pain, yellowing of eyes','itching, skin rash, stomach pain, burning micturition, spotting urination','vomiting, loss of appetite, abdominal pain, passage of gases, internal itching, indigestion','muscle wasting, patches in throat, high fever, extra marital contacts','fatigue, weight loss, restlessness, lethargy, irregular sugar level, blurred and distorted vision, obesity, excessive hunger, increased appetite, polyuria','vomiting, sunken eyes, dehydration, diarrhoea','fatigue, cough, high fever, breathlessness, family history, mucoid sputum','headache, chest pain, dizziness, loss of balance, lack of concentration','acidity, indigestion, headache, blurred and distorted vision, excessive hunger, stiff neck, depression, irritability, visual disturbances','back pain, weakness in limbs, neck pain, dizziness, loss of balance','vomiting, headache, weakness of one body side, altered sensorium','itching, vomiting, fatigue, weight loss, high fever, yellowish skin, dark urine, abdominal pain','chills, vomiting, high fever, sweating, headache, nausea, muscle pain, diarrhoea','itching, skin rash, fatigue, lethargy, high fever, headache, loss of appetite, mild fever, swelled lymph nodes, malaise, red spots over body','skin rash, chills, joint pain, vomiting, fatigue, high fever, headache, nausea, loss of appetite, pain behind the eyes, back pain, muscle pain, red spots over body, malaise','chills, vomiting, fatigue, high fever, nausea, constipation, abdominal pain, diarrhoea, toxic look (typhos), belly pain, headache','joint pain, vomiting, yellowish skin, dark urine, nausea, loss of appetite, abdominal pain, diarrhoea, mild fever, yellowing of eyes, muscle pain','itching, fatigue, lethargy, yellowish skin, dark urine, loss of appetite, abdominal pain, yellow urine, yellowing of eyes, malaise, receiving blood transfusion, receiving unsterile injections','fatigue, yellowish skin, nausea, loss of appetite, family history, yellowing of eyes','joint pain, vomiting, fatigue, yellowish skin, dark urine, nausea, loss of appetite, abdominal pain, yellowing of eyes','joint pain, vomiting, fatigue, high fever, yellowish skin, dark urine, nausea, loss of appetite, abdominal pain, yellowing of eyes, coma, stomach bleeding, acute liver failure','vomiting, yellowish skin, abdominal pain, swelling of stomach, distention of abdomen, history of alcohol consumption, fluid overload.1','chills, vomiting, fatigue, weight loss, cough, high fever, breathlessness, sweating, loss of appetite, mild fever, yellowing of eyes, swelled lymph nodes, malaise, phlegm, chest pain, blood in sputum','continuous sneezing, chills, fatigue, cough, high fever, headache, swelled lymph nodes, malaise, phlegm, throat irritation, redness of eyes, sinus pressure, runny nose, congestion, chest pain, loss of smell, muscle pain','chills, fatigue, cough, high fever, breathlessness, sweating, malaise, chest pain, fast heart rate, rusty sputum, phlegm','constipation, pain during bowel movements, pain in anal region, bloody stool, irritation in anus','vomiting, breathlessness, sweating, chest pain','fatigue, cramps, bruising, obesity, swollen legs, swollen blood vessels, prominent veins on calf','fatigue, weight gain, cold hands and feets, mood swings, lethargy, dizziness, puffy face and eyes, enlarged thyroid, brittle nails, swollen extremeties, depression, irritability, abnormal menstruation','fatigue, mood swings, weight loss, restlessness, sweating, diarrhoea, fast heart rate, excessive hunger, muscle weakness, irritability, abnormal menstruation','vomiting, fatigue, anxiety, sweating, headache, nausea, blurred and distorted vision, excessive hunger, slurred speech, irritability, palpitations, drying and tingling lips','joint pain, neck pain, knee pain, hip joint pain, swelling joints, painful walking','muscle weakness, stiff neck, swelling joints, movement stiffness, painful walking','vomiting, headache, nausea, spinning movements, loss of balance, unsteadiness','skin rash, pus filled pimples, blackheads, scurring','burning micturition, bladder discomfort, foul smell of urine, continuous feel of urine','skin rash, joint pain, skin peeling, silver like dusting, small dents in nails, inflammatory nails','skin rash, high fever, blister, red sore around nose, yellow crust ooze']
var meds=['Valsartan',
 'Guanfacine',
 'Lybrel',
 'Ortho Evra',
 'Buprenorphine / naloxone',
 'Cialis',
 'Levonorgestrel',
 'Aripiprazole',
 'Keppra',
 'Ethinyl estradiol / levonorgestrel',
 'Topiramate',
 'L-methylfolate',
 'Pentasa',
 'Dextromethorphan',
 'Nexplanon',
 'Liraglutide',
 'Trimethoprim',
 'Amitriptyline',
 'Lamotrigine',
 'Nilotinib',
 'Atripla',
 'Trazodone',
 'Etonogestrel',
 'Etanercept',
 'Tioconazole',
 'Azithromycin',
 'Eflornithine',
 'Daytrana',
 'Ativan',
 'Imitrex',
 'Sertraline',
 'Toradol',
 'Viberzi',
 'Mobic',
 'Dulcolax',
 'Morphine',
 'MoviPrep',
 'Trilafon',
 'Fluconazole',
 'Contrave',
 'Clonazepam',
 'Metaxalone',
 'Venlafaxine',
 'Ledipasvir / sofosbuvir',
 'Symbyax',
 'Tamsulosin',
 'Doxycycline',
 'Dulaglutide',
 'Intuniv',
 'Buprenorphine',
 'Qvar',
 'Opdivo',
 'Pyridium',
 'Latuda',
 'Bupropion',
 'Implanon',
 'Effexor XR',
 'Drospirenone / ethinyl estradiol',
 'NuvaRing',
 'Prepopik',
 'Tretinoin',
 'Gildess Fe 1 / 20',
 'Ethinyl estradiol / norgestimate',
 'Elbasvir / grazoprevir',
 'Clomiphene',
 'Docusate / senna',
 'Amitiza',
 'Sildenafil',
 'Lo Loestrin Fe',
 'Oxcarbazepine',
 'Wellbutrin',
 "Phillips' Milk of Magnesia",
 'Nature-Throid',
 'Lithium',
 'Oxycodone',
 'Estradiol',
 'Sronyx',
 'Augmentin XR',
 'Monistat 7-Day Combination Pack',
 'Plan B One-Step',
 'Alprazolam',
 'Fluoxetine',
 'Spironolactone',
 'Fluvoxamine',
 'Macrobid',
 'Lurasidone',
 'Adapalene / benzoyl peroxide',
 'Brimonidine',
 'Amlodipine / olmesartan',
 'Loestrin 24 Fe',
 'Linaclotide',
 'Mirtazapine',
 'Acetaminophen / hydrocodone',
 'Isotretinoin',
 'Ropinirole',
 'Zoledronic acid',
 'Lamictal',
 'Buspirone',
 'Propranolol',
 'Focalin',
 'Jolivette',
 'Levofloxacin',
 'Phentermine / topiramate',
 'Cephalexin',
 'Aviane',
 'Saxenda',
 'Clomipramine',
 'Medroxyprogesterone',
 'Aczone',
 'Nicoderm CQ',
 'Naltrexone',
 'Restasis',
 'Depo-Provera',
 'Olanzapine',
 'Oxytrol',
 'Fentanyl',
 'Epiduo',
 'Accutane',
 'Xanax',
 'Desvenlafaxine',
 'Urea',
 'Lyrica',
 'Phenergan',
 'Loestrin 21 1 / 20',
 'Loratadine',
 'Cardura XL',
 'Viibryd',
 'Mirena',
 'Ethinyl estradiol / norelgestromin',
 'Propofol',
 'Camphor / menthol',
 'Hydroxychloroquine',
 'Lorcaserin',
 'Insulin degludec',
 'Trintellix',
 'Lupron Depot',
 'Zanaflex',
 'Miconazole',
 'Opana ER',
 'Provera',
 'Diflucan',
 'Ibrance',
 'Reclipsen',
 'Lisinopril',
 'Empagliflozin',
 'Naproxen',
 'Amoxicillin / clarithromycin / lansoprazole',
 'Metoprolol',
 'Naloxegol',
 'Skyla',
 'Leuprolide',
 'Ulipristal',
 'Benzonatate']

var drugdisease=['Left Ventricular Dysfunction', 'ADHD', 'Birth Control', 'Birth Control', 'Opiate Dependence', 'Benign Prostatic Hyperplasia',
 'Emergency Contraception,Birth Control', 'Bipolar Disorde,Schizophrenia,Depression', 'Epilepsy,Seizures', 'Birth Control', 'Migraine Prevention', 
'Depression', "Crohn's Disease", 'Cough', 'Birth Control', 'Obesity,Diabetes, Type 2', 'Urinary Tract Infection', 'ibromyalgia', 'Bipolar Disorde',
 'Chronic Myelogenous Leukemia', 'HIV Infection', 'Insomnia', 'Birth Control', 'Rheumatoid Arthritis', 'Vaginal Yeast Infection',
 'Chlamydia Infection,nan', 'Hirsutism', 'ADHD', 'Panic Disorde', 'Migraine', 'Depression,Panic Disorde', 'Pain', 'Irritable Bowel Syndrome', 
'Osteoarthritis', 'Constipation', 'Pain,Chronic Pain', 'Bowel Preparation', 'Psychosis', 'Vaginal Yeast Infection', 'Obesity', 'Panic Disorde', 
'Muscle Spasm', 'Depression', 'Hepatitis C', 'Bipolar Disorde', 'Overactive Bladde,Benign Prostatic Hyperplasia', 'Urinary Tract Infection', 
'Diabetes, Type 2', 'ADHD', 'Pain', 'Asthma, Maintenance', 'Non-Small Cell Lung Cance', 'Dysuria', 'Bipolar Disorde', 'Smoking Cessation,Depression',
 'Birth Control', 'Anxiety,Depression', 'Birth Control', 'Birth Control', 'Bowel Preparation', 'Acne', 'Birth Control', 'Acne,Birth Control',
 'Hepatitis C', 'emale Infertility', 'Constipation, Acute', 'Constipation, Drug Induced', 'Erectile Dysfunction', 'Birth Control', 'Trigeminal Neuralgia',
 'Depression', 'Constipation', 'Underactive Thyroid', 'Bipolar Disorde', 'Chronic Pain', 'Atrophic Vaginitis', 'Birth Control', 
'Skin and Structure Infection', 'Vaginal Yeast Infection', 'Emergency Contraception', 'Tinnitus,Anxiety', 'Major Depressive Disorde,Depression',
 'Acne', 'Anxiety and Stress', 'Urinary Tract Infection', 'Schizophrenia,Bipolar Disorde', 'Acne', 'Rosacea', 'High Blood Pressure',
 '2</span> users found this comment helpful.', 'Irritable Bowel Syndrome,Constipation, Chronic', 'Anxiety', 'Pain', 'Acne', 'Restless Legs Syndrome', 
'Osteolytic Bone Metastases of Solid Tumors', 'Bipolar Disorde', 'Anxiety', 'Anxiety', 'ADHD', 'Birth Control', 'Bronchitis', 'Obesity,Weight Loss', 
'Skin or Soft Tissue Infection', 'Birth Control', 'Obesity', 'Obsessive Compulsive Disorde', 'Endometriosis', 'Acne', 'Smoking Cessation', 
'Opiate Dependence', 'Keratoconjunctivitis Sicca', 'Birth Control', 'Bipolar Disorde', 'Overactive Bladde', 'Breakthrough Pain', 'Acne',
 'Acne', 'Panic Disorde', 'Depression', 'nan', 'Neuropathic Pain', 'Sedation', 'Menstrual Disorders', 'Allergic Rhinitis', 
'Benign Prostatic Hyperplasia', 'Major Depressive Disorde', 'Birth Control', 'Birth Control', 'Anesthesia', 'Pain', 
'Undifferentiated Connective Tissue Disease', 'Obesity', 'Diabetes, Type 1', 'Depression', 'Endometriosis', 'Muscle Spasm', 
'Vaginal Yeast Infection', 'Pain', 'Abnormal Uterine Bleeding,4</span> users found this comment helpful.', 'Vaginal Yeast Infection', 
'Breast Cancer, Metastatic', 'Birth Control', 'High Blood Pressure', 'Diabetes, Type 2', 'Period Pain', 'Helicobacter Pylori Infection', 
'Atrial Fibrillation', 'Constipation, Drug Induced', 'Birth Control', 'Uterine Fibroids', 'Emergency Contraception', 'Cough']

var drugrating=[9, 8, 5, 8, 9, 6, 4.5, 8, 5, 9, 9, 10, 4, 2.5, 4.25, 7, 9, 9, 10, 10, 8, 10, 7.5, 10, 
1, 8.5, 10, 10, 6, 8, 9, 10, 8, 10, 1, 6.5, 2, 9, 8, 8, 9, 5, 4, 9.67, 8,
 4.5, 7, 9.5, 1, 9, 1, 1, 1, 8, 8, 1.5, 8, 3, 5.67, 9, 10, 2, 5.67,
 10, 10, 8, 10, 10, 2, 7, 4, 9, 1, 10, 8, 9, 3, 9, 8, 9, 10, 1.5, 9, 9, 1, 7.5, 8, 1, 10, 3, 7, 
8, 8, 7, 10, 10, 9, 9, 10, 9, 8, 8, 8.5, 1, 9, 1, 1, 9, 9, 8, 6, 9, 6, 9, 9, 6, 6.5, 9, 10, 10, 
10, 1, 8, 8, 10, 10, 10, 9.5, 10, 10, 1, 1, 10, 1, 5, 6, 10, 1, 2, 5.5, 10, 9, 6, 10, 10, 3, 2,
 10, 3, 6, 1, 10, 1]

var drugreview=['"It has no side effect, I take it in combination of Bystolic 5 Mg and Fish Oil"',
 '"My son is halfway through his fourth week of Intuniv. We became concerned when he began this last week, when he started taking the highest dose he will be on. For two days, he could hardly get out of bed, was very cranky, and slept for nearly 8 hours on a drive home from school vacation (very unusual for him.) I called his doctor on Monday morning and she said to stick it out a few days. See how he did at school, and with getting up in the morning. The last two days have been problem free. He is MUCH more agreeable than ever. He is less emotional (a good thing), less cranky. He is remembering all the things he should. Overall his behavior is better. \r\nWe have tried many different medications and so far this is the most effective."',
 '"I used to take another oral contraceptive, which had 21 pill cycle, and was very happy- very light periods, max 5 days, no other side effects. But it contained hormone gestodene, which is not available in US, so I switched to Lybrel, because the ingredients are similar. When my other pills ended, I started Lybrel immediately, on my first day of period, as the instructions said. And the period lasted for two weeks. When taking the second pack- same two weeks. And now, with third pack things got even worse- my third period lasted for two weeks and now it\';s the end of the third week- I still have daily brown discharge.\r\nThe positive side is that I didn\';t have any other side effects. The idea of being period free was so tempting... Alas."',
 '"This is my first time using any form of birth control. I\';m glad I went with the patch, I have been on it for 8 months. At first It decreased my libido but that subsided. The only downside is that it made my periods longer (5-6 days to be exact) I used to only have periods for 3-4 days max also made my cramps intense for the first two days of my period, I never had cramps before using birth control. Other than that in happy with the patch"',
 '"Suboxone has completely turned my life around.  I feel healthier, I\';m excelling at my job and I always have money in my pocket and my savings account.  I had none of those before Suboxone and spent years abusing oxycontin.  My paycheck was already spent by the time I got it and I started resorting to scheming and stealing to fund my addiction.  All that is history.  If you\';re ready to stop, there\';s a good chance that suboxone will put you on the path of great life again.  I have found the side-effects to be minimal compared to oxycontin.  I\';m actually sleeping better.   Slight constipation is about it for me.  It truly is amazing. The cost pales in comparison to what I spent on oxycontin."',
 '"2nd day on 5mg started to work with rock hard erections however experianced headache, lower bowel preassure. 3rd day erections would wake me up &amp; hurt! Leg/ankles aches   severe lower bowel preassure like you need to go #2 but can\';t! Enjoyed the initial rockhard erections but not at these side effects or $230 for months supply! I\';m 50 &amp; work out 3Xs a week. Not worth side effects!","My husband (age 63) has been having problems with Benign Prostate Hyperplasia, and erectile dysfunction as well.  We had gone from a fantastic sex life to one that was fading fast.  Then his doctor put him on a small daily dose (5 mg) of Cialis. Holy smokes!  He is bigger and harder than he was at 30. I am loving this. I have always had a powerful sex drive, and I was resigning myself to watching that fade away. I\';m now clearing my schedule for action. I am honestly feeling more satisfied than I did at 25.  Ladies, if your guy is slowing down, push him to do this.  You may not have as much time to clean the house, but both of you will be smiling a lot more!"',
 '"He pulled out, but he cummed a bit in me. I took the Plan B 26 hours later, and took a pregnancy test two weeks later - - I\';m pregnant.","I had the Mirena put in almost a year ago. Insertion was a breeze next to no cramping. My periods have remained heavy and do not show signs of stopping. Have gained about 30 pounds have acne and headaches and backache, so now I am wondering what is next. My doctor would not take it out and wanted me to remain on it for a year. It is almost a year so I am finding a new doctor and getting it taken out.","My time with skyla has been an absolute breeze. Ms. Skyla and i have been together since late october 2015 and it has been great. I must admit that the insertion is a bit painful,but you will soon forget. I got cramps for about a weekafter insertion. Nothing that a littlw ibuprofen couldnt tackle. I urge anyone who is thinking about skyla to just do it. I promise it is worth it. Please remember that pain is subjective. Meaning it just depends on the person. ","I\';m 27 w/ two kids. After my second child was born in 2008 I suffered from almost daily tension/migraine headaches. I wanted to try Mirena as a solution to birth control and possibly help my headaches. After 4 months my headaches are slightly better but I have had some noticeable side effects; 10-15 lbs weight gain, increased discharge, longer periods, and cramping after sex or exercise. ","Had the Liletta inserted in November. The process overall wasn\';t bad, but I also had numbing injections which helped so much with the pain. Just a couple cramps and it was over. Stopped having a period after three months, and the weird cramps I kept feeling stopped around 5 months. Everything was great until I noticed my clothes weren\';t fitting anymore. I\';ve gained 10 - 12 pounds despite months of a very clean diet, counting calories, and frequent exercise. I also started losing my hair a few weeks ago, and began sprouting chin hair that I didn\';t have before, which is making me feel very depressed. I am beyond frustrated and am having it removed in a few days.","I am 25 yrs old, no kids and have never been pregnant. After almost 10 years of being on the pill, my doctor and I decided it was time for some thing different. Insertion was very painful, the first one we were trying was faulty so I had to purchase another one right after to be placed. It was extremely uncomfortable, even after being advised to take 800mg of Motrin! I had my boyfriend bring me to and from the doctor, which I would recommend. After I got home I placed a heating pad on my lower abdomen and slept for about 2 hrs! After I woke up I felt like a completely different person! I had no aches or pains, back to normal! I would highly recommend this to any woman, there\';s no more remembering! I love it!"',
 '"Abilify changed my life. There is hope. I was on Zoloft and Clonidine when I first started Abilify at the age of 15.. Zoloft for depression and Clondine to manage my complete rage. My moods were out of control. I was depressed and hopeless one second and then mean, irrational, and full of rage the next. My Dr. prescribed me 2mg of Abilify and from that point on I feel like I have been cured though I know I\';m not.. Bi-polar disorder is a constant battle. I know Abilify works for me because I have tried to get off it and lost complete control over my emotions. Went back on it and I was golden again.  I am on 5mg 2x daily. I am now 21 and better than I have ever been in the past. Only side effect is I like to eat a lot.","Abilify 20 mg.\r\nI am a patient diagnosed with disorganized schizophrenia, depression,  schizoaffective disorder, bipolar.  I have experienced a sensitivity to my emotions, as well as how I react to my feelings.  I really don\';t feel out of the normal with any &quot;sexual frustration&quot;...and I wouldn\';t say this has increased/decreased.  I feel less anxious on the medication, and seemingly more at ease with myself when I take this medication.  It is a hard step to have people telling you that you actually do better on this pill, when half your life ago, you didn\';t have &quot;mental illness&quot;, and suddenly you become someone else.   My weight did fluxuate when on this drug.  But I feel it was due to stress factors outside of a regular environment.  I feel if you place yourself in good surroundings and support you do much better at being the person you are here to be.  I am so much happier in life with a routine.  I feel like I only referred to enlongated periods of sleep because of depression, and events surrounding certain time frames hence thoughts, and reactions.\r\nAbilify (aripiprazole) My instant reaction from this drug is concern for my well-being.  I am nervous because I am one of the people taking this drug till the stars fade, every day to my last.  My doctors all seem to say the same thing, and that is, &quot;This medication is working for you&quot;.  I do blood tests when I go into the Hospital freqently, and they are not finding anything off the charts and everything is always normal with my vitals. \r\nMy thought is, how do they consider this medication works for me?  Because I am not showing side effects?  Because I am accepting?  I feel I have to hold patience, my own value, what I care about around me to help better myself mentally and my virtue.  I feel that I am just not the type of person to curbside answers to things we wonder deeply about, I guess.  \r\nI don\';t know if there are any people who would agree then that I should ask if there are any women who have taken abilify during a pregnancy?  Just wondering what the reaction is...  Is my question?  I am a 30 year old female diagnosed with Mental Illness starting in 2004.  I started to take Abilify 20 mg. in 2004 to present.  Overall, since this medication has not been threatening to me, I feel I should embrace it.","Intake Effexor XR 375 mg, and lorazepam for depression and anxiety. My doctor added Abilify and I took it in mornings. It made me foggy. I moved it to Bertie and sleep better overall. I have noticed an increase in irritability which equates to feeling extremely angry by 3 pm daily. I\';ve rearranged my lorazepam to reduce that but need more time. I\';m also having restlessness which almost feels manic. We shall see. Increased cravings for sweets."',
 '" I Ve had  nothing but problems with the Keppera : constant shaking in my arms &amp; legs &amp; pins &amp; needles feeling in my arms &amp; legs severe light headedness no appetite &amp; etc.","It works very well"',
 '"I had been on the pill for many years. When my doctor changed my RX to chateal, it was as effective. It really did help me by completely clearing my acne, this takes about 6 months though. I did not gain extra weight, or develop any emotional health issues. I stopped taking it bc I started using a more natural method of birth control, but started to take it bc I hate that my acne came back at age 28. I really hope symptoms like depression, or weight gain do not begin to affect me as I am older now. I\';m also naturally moody, so this may worsen things. I was in a negative mental rut today. Also I hope this doesn\';t push me over the edge, as I believe I am depressed. Hopefully it\';ll be just like when I was younger.","I love Lutera. I am very sensitive to other forms of birth control. Lutera has been one of the only kinds I can take. \r\r\nPros: light periods, no cramping, no intense side effects, bigger boobs.\r\r\nCons: Brown periods, slight weight gain. \r\r\nI also tend to get a bit emotional 1 or 2 days before my period....however I am always an emotional person so this could just be me. I have been on Lutera for 6 years ☺","I\';ve been on Jolessa for 6 months.  I decided to try this because I get bad headaches during my period (even though they\';d only last 3 days, 4 days at most) and I wanted to avoid it altogether.  The first two months, it was great.  Then my period arrived a month early and the bleeding lasted for 25 days, mostly light.  I had already picked up my next 90 day pack so I figured I\';d try to get through that and if I still had the bleeding, I\';d talk to my doctor about another birth control.  No need to do that because Jolessa is now working perfectly for me.  It\';s been wonderful not having a period for a few months.  I\';d recommend this birth control to anyone."',
 '"I have been on this medication almost two weeks, started out on 25mg and working my way up to 100mg, currently at 50mg. No headaches at all so far and I was having 2-3 crippling migraines a week. I have lost 5.2lbs so far but note I am really paying close attention to what I am eating, I have a lot of weight to lose and if weight loss is a side effect I want to help it along as much as I can.  Now, other side effects, they are there the word recall issues exist, the memory issues, the worst of it seems to be the vision disturbances, there have been times I have just not driven because I\';m sure it would not have been safe. The good news is it seems to be wearing off...I have tons of energy and I am in a great mood."',
 '"I have taken anti-depressants for years, with some improvement but mostly moderate to severe side affects, which makes me go off them.\r\n\r\nI only take Cymbalta now mostly for pain.\r\n\r\nWhen I began Deplin, I noticed a major improvement overnight. More energy, better disposition, and no sinking to the low lows of major depression. I have been taking it for about 3 months now and feel like a normal person for the first time ever. Best thing, no side effects."',
 '"I had Crohn\';s with a resection 30 years ago and have been mostly in remission since.  Have recently had a bad flare and narrowing at the anastomosis and need to be on medication, but haven\';t found one that I can handle.  Asacol gave me such serious body aching and fatigue that I could not function.  Pentasa immediately gave me heart palpitations and arrhythmias so I had to discontinue it."',
 '"Have a little bit of a lingering cough from a cold. Not giving me much trouble except keeps me up at night. I heard this was good so I took so I could get some sleep. Helped tremendously with the cough but then I was having bad stomach cramps and diarrhea. I hadn\';t eaten anything that should have upset my stomach and it didn\';t really feel like a &quot;bug&quot; so I looked up side effects for Delsym.  Now I wish I had done that first because I probably wouldn\';t have taken it. So, while it worked for my cough I still didn\';t get any sleep due to the stomach issues.","Gave this high priced, 12 hour cough &quot;suppressant&quot; in the kiddie version, to my 6 year old. The only thing it suppressed, was his ability to sleep. Worse product I\';ve ever purchased for him."',
 '"Started Nexplanon 2 months ago because I have a minimal amount of contraception\';s I can take due to my inability to take the hormone that is used in most birth controls. I\';m trying to give it time because it is one of my only options right now. But honestly if I had options I\';d get it removed.\r\nI\';ve never had acne problems in my life, and immediately broke out after getting it implanted. Sex drive is completely gone, and I used to have sex with my boyfriend a few days a week, now its completely forced and not even fun for me anymore. I mean I\';m on birth control because I like having sex but don\';t want to get pregnant, why take a birth control that takes away sex? Very unhappy and hope that I get it back with time or I\';m getting it removed.","I\';ve had mine for over a year and noticed the weight gain, mood swings, but no acne. My body adjusted quick and I lost the weight. The only issue I\';ve had is every time my boyfriend and I have sex, I spot the next day for less than a week. Other than those issues I love it and recommend it to all of my friends!","I\';ve had this implant for 7 months now, I\';ve had no problems except for real bad acne breakouts. I\';ve alway suffered from acne here and there but it\';s gotten bad after the implant. I have real bad breakouts all over my cheeks, and chin. At first I thought it was something I ate but I did some research and found out that this implant contains progesterone which can cause acne. I\';m planning to remove this implant. Look out for breakouts after implant,","Brief review due to character limit:\r\nInserted: Feb 2014\r\nRemoved: Feb 2017\r\n\r\nInsertion: After numbed it\';s painless.\r\nWeek after: great arm pain for 1 week.\r\n\r\nYear one: constant light bleeding (pantyliner) all year long. \r\n\r\nYear two: Sporadic light periods lasting 1-1.5 months, then 2-3 week time of no period.\r\n\r\nYear three: Sporadic heavy-moderate periods lasting 3 weeks avg, then 2-3 weeks of no period.\r\n\r\nEnd of year 3 (last 4 months): Prescribed pill BC on top of Nexplanon-&gt;regulated my periods:\r\n3 weeks w/pill hormone = no period. \r\n1 week no hormone = period.\r\nBad acne b/c so much hormone\r\n\r\nTL/DR (Too long/Didn\';t read)\r\nVERY sporadic/long lasting periods\r\nWhen not on period BC worked as intended\r\nNot removed earlier b/c didn\';t have insurance \r\nRemoved and switched to pill BC"',
 '"I have been taking Saxenda since July 2016.  I had severe nausea for about a month once I got up to the 2.6 dosage.  It has since subsided and the only side effect I notice now is the dry mouth.  I make sure to drink  2.5 litres of water a day (about 10 glasses).  This helps with the weight loss as well as the constipation.  I have been reducing my dose to find a comfortable spot where I am still losing weight but don\';t feel like I am over medicating.  For me, 1.8 is working very well.  I also feel wearing a Fitbit has really helped.  I can track my food, water, exercise and steps - it keeps me moving more.  When this started I could barely walk the length of myself without getting winded - I have lost 58 lbs so far.","have only been on victorza for a few days.  I had bad nausea and migranes then it changed to no energy at all .  I sleep till noon one day and I have 2 young kids and a full time job.  Searching for a better answer"',
 '"This drug worked very well for me and cleared up my UTI in a matter of 48hrs, although I was on a 7 day course of 2x200mg/daily. Unfortunately once the tablets finished the infection returned so needed a 2nd course. I\';m currently taking a low dose at evening to keep the infection at bay while the specialists do some tests.  I normally get every side effect going and dread taking new medication in any form especially after an horrific experience with Ciorofloxacin but the only side effect I experienced with this was itchy ankles and feet on day two but that didn\';t last into third day so I would class this as a minor side effect and insignificant. Good luck."',
 '"I\';ve been taking amitriptyline since January 2013 after being diagnosed with fibromyalgia. I tried cymbalta for a week and my Dr decided that since it kept me awake 24/7 that it wasn\';t a good fit for me even though it relieved my pain. I started with 25 mg. After 2 weeks I had some breakthrough pain, so my Dr increased my dosage to 50mg and I\';m still on that dosage today. For the first full year I was on this I never had pain and felt \';cured\';. As time went on, it seems to help control my pain. I do still have pain, but at a low manageable level. I take this around 7pm each evening to avoid feeling overly drowsy in the mornings. This med allows me to have a fairly normal life."',
 '"I\';ve been on every medicine under the sun (it seems) to manage the hypomania / mania of Bipolar2. Within a few days of starting Lamictal (was on Tegretol) it was as if someone had turned a light on in my head. Is this the way &quot;normal&quot; people think? was one of the first things that struck me. I sleep like a log, have no irritability, almost no anger (other than what would be considered normal). I am able to focus and my creative, impulsive thoughts have decreased enough to be manageable. It\';s a God send as I would perennially be in a state of hypo mania, which sounds great, but I was physically and emotionally exhausted. My libido is markedly lower but I wonder if that is perhaps an effect of not being hypo manic. I take 20 mg for anxiety."',
 '"I have been on Tasigna for just over 3 years now (300mg x 2 times a day) Tasigna worked for me within a few weeks I have been in remission for basically the entire 3 years. As for the side effects, I feel sick to my stomach, tired,  severe leg and arm pain, I can\';t walk to long without needing a break, I went from working full time to not working at all because I am so tired all the time.... but hey I am in remission and alive so is all the above really a problem? Nope"',
 '"Spring of 2008 I was hospitalized with pnuemonia and diagnosed with Lyme diease and full blown AIDS with CD4 count of &quot;11&quot; viral load some number so high in the millions I could never remember. I was taking Combivir and Kaletra with Dapsone for the 1st year then it stopped working. I started Kaletra with the Dapsone my CD4 count is now 209 and rising. For a few weeks I was very aggressive and broke all my dishes in the house LOL. I take vitamin supplements and drink a boost pluz every day. LIfe is good now!"',
 '"I have insomnia, it\';s horrible. My story begins with my PCP prescribing me Prozac to help with intestinal issues, because I was desperate I tried it, I was on it for 3 weeks. Stopped because of insomnia. Then I was prescribed Ativan, it out me out, but was very addicting. I had rebound insomnia. Then after about 14 days I hardly any sleep l tried the doctor one more time. I asked him about Trazadone. He told me that was a good medication for insomnia. He put me on 25 mgs, but stated I may have to figure out what dosage is best for me. I am currently taking 100 mgs, which is on the low range of what is prescribed, 400 mgs being at the high end for insomnia. I have the dry mouth and nasel congestion. I can live with that, I sleep now, yeah..."',
 '"Nexplanon does its job. I can have worry free sex. The only thing is that my periods are sometimes light and sometimes heavy. Sometimes they go away and sometimes they show up unexpected. I also feel somewhat depressed. Not sure if its Nexplanon or not. I\';ve had Nexplanont for about 2 months now, but despite the side effects its the most effective birth control I\';ve ever used and I do not plan on taking it out.","My experience during the nexplon is great not a pregnancy yet.  My only issue is it causes me too much bleeding. I get my periods from every other week up to 1 month up to 3 month . And it ruins My sex life","I was put on this birth control when I was 15 I was 150lbs I gained 50lbs then I replaced it and got a new one and I\';m gaining even more weight it barely helps with periods anymore my periods last for 5 weeks at a time now and barely anytime in between to have a break","I absolutely love Nexplanon! Ladies, at first I was super hesitant but I had to get off the Trinessa birth control because it caused me too much bloating and I was miserable 3 weeks out of the month. I was so excited to get the implant but the reviews I read freaked me out. The process was super easy and fast. The most uncomfortable part was the numbing process (it stung a bit). I didn\';t feel the implant insertion at all. There was bruising for about a week and it itched quite a bit but it went away after a week once it was fairly healed. As far as side effects, I felt a bit moody for about 2 weeks and I had a headache for a few days when I first got the implant. I\';ve had ZERO bleeding and NO weight gain.","The first 3 years I was on nexplanon I had no problems, except for when I first got it interested I bled for 6 months straight (very light). Then after that everything was fine. After the 3 years were up I decided to get another one inserted since I had no major problems with the first one. That\';s when it went downhill. I gained about 20 pounds, became anxious about everything, moods began to change, also had severe pain in my ovaries. I got an ultrasound to make sure there weren\';t any cysts and everything was normal but I continued to have severe pain. Finally, I decided to get it removed and everyting has been good so far no more pain, moods are better, and I\';ve lost weight.","I got this inserted 3 years ago, my arm hurt for one day with no bruising, and then I literally forgot about it for the remaining time. No periods ever, and never once pregnant. No weight gain. Most convenient form of birth control ever used, but it may just be the way my body has reacted. Got it reinserted for the next 3 years and got some bruising, but not too bad."',
 '"I live in Western Australia and disturbed by some comments on here. The cost of Embrel is cost of an ordinary prescription $36 for me the government pays the remainder of the cost to the chemist. I also go to the the medical centre every Saturday morning a Dr looks over my prescription and then he advises the nurse to administer the injection also no cost to myself and this is part of nurses duties. I am unsure of the country where people who have made comments referring to cost and that nobody is there to  administer the injection for them. I am very lucky to live in Australia as we have the best health system worldwide and everybody is  given the opportunity to receive proper medical help whether you are rich or poor there is no discrimination."',
 '"Do not use the cream that comes with this. It turned my hoo-ha into a burning ring of fire. It is 1 am and I have to work tomorrow. It\';s going to be a sleepless night for me","The burning is out of control about 20 minutes after inserting it . Sat in the bath trying to get this stuff out . This is awful"',
 '"Was prescribed one dose over the course of one day, took 4 pills of 250mg after a light lunch, and had nausea and mild stomach pains/upset. Lying down did not alleviate the discomfort and threw up 3 hours later. Called up my doctor to check if I needed to take another dose but he said my body would have absorbed the pills by then. Still experiencing mild stomach pains but nausea is mostly gone now.","Very good response. It is so useful for me. "',
 '"I\';m writing a second review on Vaniqa.  I started using this in February this year. Twice a day although some days/times I do forget. I just want to say how delighted I am to have found this. It has totally and completely changed my life! I had terrible male pattern hair growth all over my cheeks, chin, upper and lower lip and starting to grow down my neck. I used to pluck for up to 2 hrs a time every 3rd day but was never hair free. I wouldn\';t kiss anyone hello or goodbye as even plucked the stubble could be felt under my skin. 3 months on im not scared of being caught in bright sunlight I pluck around once a fortnight and it takes around 10 mins. The hairs that are coming through are soft and downy. My life is transformed."',
 '"Hi all, My son who is 12 was diagnosed when he was in 2nd grade. We tried everything before medication. When we tried meds, the first one made him loose weight, fast. The second gave him a nasty tic that thankfully went away as soon as he stopped the med, the third worked for a couple of years and around January of last year we started to have problems so his doctor recommended Daytrana. It has been wonderful for my son! Easy to use, he handles this for himself each day and takes it off when he gets home from school. The patch effects last long enough for him to do his homework. He does have issues with weight gain and sleep but he uses melatonin before bed if he feels like he will not be able to shut down. The shortage is KILLING us!"',
 '"Honestly, I have been taking ativan for 2 years now 1mg twice daily.  It does help but it should be used as a tool for panic attacks NOT A SOLUTION.  I have tried so many anti-depressants as well such as cymbalta, cipralex and a couple more.  The best thing is to talk to close friends and family or even a psychiatrist.  talking to people and venting is honestly the best thing you can do for yourself even though it takes a lot of will power to do it.  I would love to hear other people opinion."',
 '"At first I suffered through them. This included splitting head pain, nausea, and vomiting. I started using Excedrin after a while which helped if I took it right away. Then that started to not work so well anymore. I had one really bad one that lasted hours. I was still throwing up at 9 pm and I was now throwing up blood. I went to the ER and when I finally got in they put me on an IV to hydrate me. They then added Imitrex to the bag and I soon started feeling side effects. My head felt like I was going to pass out. My breathing became labored and it felt like someone was sitting on my chest. They said that meant it was working. After about two minutes everything was gone. I got pills to take at home and they worked okay. Not as fast."',
 '"1 week on Zoloft for anxiety and mood swings. I take 50mg in the mornings with my breakfast. Nausea on day one  but that subsided as the week went on.  I get the jitters about 2 hrs after taking it followed by yawning. I feel much better though and less angry/stressed.","These reviews helped me so much when I first started Zoloft over 5 weeks ago that I wanted to post my experience.  After several weeks of increasingly worsening panic attacks at work, I ended up in the hospital. A year ago my psych Dr switched me from cymbalta to a mood stabilizer and things were good until November as stress at work increased.  I was depending on too much bromazepam to get through the day.  My GP started me on 50 mg of Zoloft and my anxiety was so bad also tremors for 4 weeks I was sure I would have to quit working or cut my hours.  But this Monday on week 5 was amazing.  I still have some anxiety but I seem to be able to handle it now.  It\';s like I have my confidence back. Good luck!"',
 '"I am 30 years old. I had a multiple composite spinal injuries 15 years ago. The aches and pains unbearable. I started taking anti-inflammatories about 2 years ago. I started getting injections every month of Toradol and &quot;Depo&quot; something. I am almost off all pain meds I mean I still have bad days but I can function again."',
 '"Have been taking Viberzi for a month now for IBS-D and I can\';t be happier. I have ZERO side effects. Thank you for making me normal again!!!!!!"',
 '"Reduced my pain by 80% and lets me live a normal life again!"',
 '"SO MUCH PAIN! \r\nIn the last 2 years I have suffered with a brain tumour so have been in a LOT of pain to the point of morphine everyday for a year. Then I had brain surgery...but the pain from this pill came pretty close!! In serious pain to the point of blacking out hot and cold shivers and just sat in pain feeling like trapped wind/indigestion it\';s just.. Ahhhh!!!! Don\';t take this!!!"',
 '"I have been on morphine for at least 7 years..It is the only medicine that seems to manage my pain. Without it I would be in bed 90% of the time. With it I can have a life.","I have been a long term sufferer of chronic pain from Fibromyalgia, DDD, Scoliosis, Sciatica, Arthritis, Migraines and Chronic Fatigue Syndrome since 1992.,. After starting out with the over the counter meds, then moving to prescription Motrin, Day trip, Rendering, and numerous anti depressants, my doctor began prescribing Vicodin 5/500. At first they worked, but after 3months, nothing! So I went back to my doctor and told him. He then proceeded to put me on 7.5/750, again they worked for me no longer after 3 months. To make a long story short, I am now and have been on MS Contin, 60mg x two times a day and 100mg at bedtime. For my break-thru pain I am on Oxycodone 30mg x two. I\';m here to say that I have a life once again!"',
 '"I have taken this at least 5-6 times for the last 10 years. I have had major problems with it since the first time. Causing me MAJOR FATIGUE. The last time I took it was 3 year\';s ago and I had very severe cramps and not having enough time to get to the bathroom. I went to the hospital and the doctor said it didn\';t work good enough so he had me go home and do a second round. I went back the next day and did the process with no energy. I had to do it last night and it was even worse than the other times. I was gagging it down and up all night with severe cramps. I tried the second dose in the morning and I just about started throwing up so I called the office and they said to stop. Once the doctor was done he said it didn\';t evacuate enough"',
 '"I had a similar experience.  Tremors in hands (not really noticeable to someone watching unless they were looking for it), but relief from the delusions I was experiencing. My problem has been going on for over 16 years so I anticipate it will not magically disappear (and it didn\';t) but the clarity of thinking I experience with this medicine really helps me."',
 '"I am very prone to yeast infections, I believe it\';s due to my birth control as well as having unprotected sex. Fluconazole has always cleared up my yeast infections with 2 doses. No side effects."',
 '"I am just finishing my second week taking Contrave and have lost 10 lbs. It has been an interesting experience because the drug is definitely not an appetite suppressant, yet it does help you control the urge to eat. I have had mild side effects - some stomach discomfort and slight headaches along with constipation, but it has all been easily manageable. If you are considering taking this medication please keep in mind that you still need to do the work by exercising and eating right, but the medication really does help. It has helped me get my motivation back to exercise, and it definitely helps with cravings to eat making it easy to just eat what I need to be healthy. Use the coupon they give you, it drops cost to $70"',
 '"This medication changed my life.  My panic attacks were so out of control I was barely able to leave the house.  Within 2 days, a moderate does of this changed me into a new person.  That was 15 years ago.  My dosage has never changed."',
 '"I have been taking this medicine due to lower back trouble.  When I first took it, it worked great, now all it does is put me to sleep."',
 '"my gp started me on Venlafaxine yesterday to help with depression and the change,a hour after taking them i was feeling very sick couldn,t stomach food or fluids, thought keep it up as she told me they did come with some side effects which would get better,took another one last night and was so ill i couldn,t stand ,being sick sweating shaking thought i was going to pass out. Did get some sleep hopeing to feel better this morning,took another one and felt so spaced out dry mouth shaking ,sick, so booked in to see gp again to make sure i should be feeling like this, only to find out she had put me on the wrong dose should have been on 37.5mg was put on 150mg, now on right dose hope this will be better"',
 '"At initial testing my VL was over 6 million. I received my meds on saturday 2 days prior to testing to establish a baseline. I started when I received my pills. 2 days and 5 hours later I got my blood test to establish VL, I had taken 3 pills at this point and my VL was under 700.  VL @ 4 weeks was 0 . VL @ 8 weeks was 0 and @ 12 weeks was 0 .  2 weeks til my 1st EOT test. I feel cured. My side effects were next to nothing.","Side effects are light- fatigue and a bit of a headache. I did find it easier to take it an hour after dinner.  WAY better then the triple-threat approach.  My blood work does indicate that I am in the beggining stages of cirrhosis. I also had Hep B in 1994. \r\n\r\nSo far, it\';s like a miracle.  Other than the fatigue (which is nothing if you\';ve suffered Jaundice or the \';Sickie\'; symptoms that Hep C can cause), it\';s business as usual.","Had hep-c since early 70s and cirrhosis for the last 20 yrs. Tried interferon and riboviron which   had to stop treatments due to side effects that was terrible. Got on transplant list in Oct of 2014 and received a new liver on 19 Dec 2014. I was really blessed. Hep-c  was on a mission to destroy new liver but after 4 weeks of harvoni virus is undetectable .  Another blessing. Am still on treatments for 8 more weeks but 0 side effects so no problem."',
 '"Helps against sadness, and strongly counters moderate urges to drink at a stressful, confusing time in my life."',
 '"24 Year Old, Male, UK ,Normally I would go every hour, even when drinking very small amounts of water or drinks.\r\n\r\nI took this medication for only two weeks, I noticed right away I would go less often to the toilet, and it was much easier to dispense the urine. \r\n\r\nUnfortunately I had to stop taking this as the medications side effects outweighed the benefits. I found that I would have incredibly intense mood swings, aggression, feel clumsy and dizzy all the time. Blurry vision. Memory problems or mind blanks. runny nose, weakness, tiredness.\r\n\r\nI am now trying Betmiga.. lets see","Been taking this medication for 6 years.  I have a good stream and it was prescribed by my doctor because I wasn\';t emptying my bladder fully due to a bladder that did not have the muscle tone that it once had.  It worked great for most of these years but due to my age, 85, I can\';t always make it to the bathroom fast enough to urinate.  I\';m going to stop taking it and see if there is a difference in reaching the bathroom before I have to let go of a full bladder."',
 '"I battled a nasty UTI for over a month &amp; went through 3 different antibiotics till my doctor finally gave me this one. Makes you terribly sick to your stomach but in the end is completely worth it!! Felt completely back to normal in 2 days!!"',
 '"Hey Guys,  It\';s been 4 months since my last post as I wanted to give it a few months to see how this was going to work.  So, I have been on Trulicity for six months now with Metformin.  When I hit the five month period the diarrhea, gas, sulphur belching finally subsided.  I now longer have any of those side effects.  However, I still haven\';t lost any weight at all, but I think that was because when I first started Trulicity I was taking it with Glimepiride and that one has a side effect of weight gain so I think the two meds were fighting each other lol.  I have been back on the Metformin with Trulicity for about a week now, so we will see what this does.  I was diagnosed as  stage 3 chronic kidney disease (CKD 3) so I am watching diet closely.","I was recently referred to a endocrinologist and he started me on Trulicity and Jardiance. I\';ve tried to take Byetta in the past but had to stop because it made me very sick. I lost weight. But that was because I was throwing up all day. Effective weight loss method but I do NOT recommend it! \r\nI\';ve taken one dose of Trulicity and while I do have mild nausea it is not bad and I have switched from coffee to green tea in the morning. Really helps. That I would recommend. Sugar levels have not dropped significantly but they are dropping. Guess one week won\';t work wonders and I have to wait a bit. I don\';t know if it is the Trulicity or the Jardiance or the combo of both but I have managed to lose 7 pounds in 5 days."',
 '"Intuniv did not work for my son; he was bouncing off the walls while he was taking it, and having major issues in class! It seems to work the opposite on him!"',
 '"My pain management doctor put me on Butrans patches about 6 weeks ago 5 mg dose. The first box of four was a lifesaver. No more agony at work. Able to sleep. Did more in two weekends than I had in two years. I\';m hoping to bump up to the ten mg dose soon to cut down on my Norco. I have had chronic pain for many years and have been through many medicines including Oxycontin. This patch is the best so far.","I love my Butrans patch!!! And it has relieved more than half of my pain, and I know this because I only have to take less than half of my pain killers now that I am on the patch! I change my patch every Saturday, but if I miss 24 hours my pain starts to reside again. If you are not a heavy drinker I would advise trying this patch!!!"',
 '"I got heart palpitations, really bad - like almost constant. I was taking the 40 mcg one puff twice a day. I switched to flovemt and all is well."',
 '"My mother died from lung cancer. Her last hope of this medication. Within a couple months she was gone"',
 '"I\';ve been having UTIs for 7 years, my most recent one has lasted 24 days so far. Because of this I went to the doctor and they prescribed me pyridium twice a day. I was very hopeful but unfortunately it didn\';t work. The burning while urinating is still there and I\';ve been on it for three days so far. Also discomfort all hours of the day down there. It may work well for others but my body doesn\';t accept it, it did nothing. Going to the doctor was useless, go straight to the urologist"',
 '"I have had great experience so far with Latuda. I started taking 40 mg in Nov., and it worked great for about a week, then I crashed again. Dr. put it up to 80 mg and I\';ve been great ever since. I\';m afraid, though, because my sex drive has completely disappeared, and if it\';s the Latuda, I\';m going to have to go off it-and I hate to go off something that\';s working so well. However, I\';m also on a pretty high dose of Lexapro, and the Dr. thinks it\';s more likely to be a side effect of that, so we\';re decreasing that and hopefully that will work, because otherwise I\';m feeling really good. I\';m really afraid I\';ll have to go off it."',
 '"Love this, no mouth sores, or ulcers like Wellbutrin gave me. I COMPLETELY QUIT SMOKING...this works.","I was really glad that I experienced none of the possible side effects. After four weeks I did notice my mood getting better, but after that some things happened in my life (my dog had surgery, a break-up, a hair experiment gone wrong) that I was not able to deal with and I got worse. I felt myself spiraling downward and my anxiety shot way up. It\';s month number two and I just switched to lexapro. Hope it helps.","F/26, Wellbutrin SR 100mg twice a day &amp; I feel so much better. I\';ve tried many different SS/SNRIs over the past 12 years &amp; they all made me have extreme suicidal thoughts. I had kind of given up hope on finding something that worked for me, but then a new psychiatrist recommended trying Wellbutrin. The first week or so was rough, I had blurry vision, shakes, &amp; extreme light sensitivity. Those negative side effects went away after 3 weeks. I\';m 3 months in &amp; my mood has significantly increased, which is just amazing because my depression worsens significantly in the winter. I feel optimistic for the future, my sex drive is better, I have more energy &amp; am more focused (I have fibromyalgia as well so this is huge for me), and I\';ve quit smoking!"',
 '"Never again! After being on depo I was suppose to b an ideal candidate the first 6 months was ok bit moody but fine no weight gain but then something changed I was constantly bleeding and getting horrible hormone spots I normally have clear skin mood swings were increasing. After 14 months I decided to have it taken out and that was an ordeal they can b very tricky for the doc remove. So 3 anesthetics and a few stitches later its out. It\';s simply not worth the hassle","I have been on this for 8 months and sad to say it\';s caused nothing but my self esteem to become lower. I\';ve gained 10 lbs out of no where. I\';m only 22 and have a fast metabolism. I thought it started to slow down but it didn\';t make sense. My breasts got smaller, I have lost complete sex drive, my breasts aren\';t sensitive anymore at all like they used to be and I\';m so emotional, even crying at times. The only thing I can say is that it is 100% effective but not worth what it has done to my body. Not only that but I started breaking out on my body and on my face as well."',
 '"Was on this med for 5 years. Worked fine but not great. Stopped the panic attacks and gave me relief of every day nervousness that I was experiencing. Took months for the side effects to diminish when I first started taking it. What did not leave - insomnia, night sweats, lack of sex drive and poor orgasms (or no orgasms at all).","This medicine saved my life. I was at my wits end with anti-depressants and was ready to give up. My doctor finally prescribed me this after many failed medications, I am so glad she did. I honestly do not know where I would be without Effexor XR. Side effects were very mild compared to other anti-depressants I tried. I was drowsy for the first couple days, but it was tolerable. I highly recommend this for severe depression. I would also like to mention for people to realize there is light at the end of the tunnel and YOU WILL GET BETTER, and to never give up."',
 '"I was put on Yasmin for 6 months to regulate my cycle and reduce acne flare-ups and it was the worst 6 months of my life. I gained 20lbs that did NOT come off easily after stopping the pill, experienced horrible mood swings, had HEAVIER periods, acne breakouts, breakthrough bleeding, and I was nauseous all the time. This pill seems to agree with most people but it definitely did not agree with me. I went on Femcon a year after stopping Yasmin and experienced virtually no side effects."',
 '"I was off birth control for a while considering getting pregnant. I had used other types of birth control before, the pill, the patch, etc. I decided to get back on birth control but didn\';t want to worry about taking a daily pill so I requested the Nuvaring. When I started the Nuvaring I felt it inside my body and had a lot of cramps. A few days later I started experiencing more cramps and very strong upper stomach pain. They were so bad I missed work for a week. Finally I ended up going to the ER and they couldn\';t figure out what was wrong. I finally asked the doctor and it was the Nuvaring side effects.","I have been on pills for years, and in 2012 I tried Mirena. I had cramps and terrible side effects all the time and just had it taken out last month because I have gained around 10lbs in my stomach area. I have been on Nuvaring for about 2 weeks and so far it\';s way better. As soon as Mirena was removed my weird stomach pains stopped, but I\';m still trying to lose the extra weight. \r\n\r\n","I am torn by the Nuvaring. The convenience is great. There is no daily time to take a pill, only once a month which can easily be marked on a calender or put into a phone. It never falls out, I never feel it and changing it is simple, too. I would give the Nuvaring a 10 out of 10 just based upon the simplicity and the price is really reasonable, too. But, there are some downsides (for me personally). For the first few months, I did not notice side effects, although they are there. I have a VERY low tolerance to alcohol when on the Nuvaring. Very emotional, tired, and strung out all the time. I was on the pill before and none of these happened. I also have longer periods. It\';s worth a try, every girl seems to have a different experience!"',
 '"I took the Prepopik for my first colonoscopy (I\';m 25) and I found it to be very effective. The orange flavor was very tolerable. I had no bad cramps or terrible side effects with it, but I had taken magnesium citrate the night before and that had already cleaned me out somewhat. My only issue was I ended up so dehydrated that I showed up to my colonoscopy with a fever. Try to drink as much fluid as you can with this prep! I drank plenty, but there was more liquid coming out of me than going in. Overall, I would recommend the Prepopik. On a side note, my insurance didn\';t cover it, but the office I go to had it available. I recommend asking your office if they have it available if insurance won\';t cover it at the pharmacy."',
 '"I just hit my three month point on tretinoin .05% and I\';m so happy. I was really  depressed about my skin during the first two months because I\';ve never had bad acne and the cream made me have horrible acne. But I knew that was the worst part of it and after that was over I would be fine. I\';ve inly had two zits since then and I\';m only left with scars which is fine. Try it out even if you\';re scared because I was too and I\';m so glad i did. It\';s worth it!"',
 '"it caused me to gain 30 pounds"',
 '"Best treatment for acne I have used! I\';ve gone through accutane, many face washes, retinol creams, and other forms of birth control. Some other forms of birth control just make acne worse, depending on the type of progestin in it. You need the least androgenic type possible, and sprintec has worked the best for me! Nearly clear skin. Takes about 5-6 months to fully work, but it does work.","I wrote my expirence with this pill before, back when I started and it actually worked.\r\r\n\r\r\nI\';ve been on it for 6 months now and let me tell you, i\';m already going to the doctor to switch. \r\r\nSure, no babies. That part was effective.\r\r\nBut eventually, I ended up having cramps again (they had gone away when i first started) my acne flared up like nobody\';s buisness, my headaches are horrible and daily, and i\';ve been suffering from depression. I never have any motivation, i burst out crying for no reasons, and I get angry out of no where. This is very out of character for me. \r\r\nI\';m disapointed but hopefully I will find a better option.","I don\';t think I noticed this at first or even realized the pill was the cause, but this pill gave me terrible headaches for 3-4 days during my period.  I am hungry and moody before my period. The period is very light, which is a plus, but I can\';t stand the headaches.  It feels like I have a sinus infection and taking Advil non stop doesn\';t help.  It\';s not worth it.  I would LOVE to have cramps instead of headaches."',
 '"I started taking Zepatier three days ago! No sides effects till now! I would like to share only this that I feel a slight pain in the back of the head. That\';s all for now! I\';ll keep my fingers crossed till I finish in 12 weeks! :)\r\nUpdate: Now, I\';ve finish my 3rd week of the treatment! No sides effects, even my blood test is brilliant! I\';ll inform you when I finish my 8 week!Update:\r\nIncredible!!!!!!!!!!! On my 31st day, the virus is undetectable! Before start taking Zepatier I had 4.796.191 viral load, now the results are negative! No side effects! Zepatier is working very well! Thank you Zepatier!"',
 '"I took Clomid for the first time last month. My husband and I tried for a year. I have a blocked Fallopian tube. I had to use estrogen medicine also because my uterine lining was too thin. Then my doctor had me use HCG shot to stimulate ovulation since Clomid can apparently mess up if/when ovulation occurs. I took the HCG shot over 2 weeks ago. I noticed some weird symptoms a few days ago and I just took multiple pregnancy tests. And I\';m pregnant! So Clomid worked great for me so far. Yay!"',
 '"I am a 52 year old women.I was bloating a lot from not pooping..Alls good now...."',
 '"I had a tummy tuck on Dec 18. The surgery was painful but the constipation from opioids from the surgery was just as bad. My plastic surgeon wasn\';t familiar with treating OIC so I called my primary care physician. She gave me Amitiza 24mcg. It took almost two days but it was amazing and I was so thankful. I had to remain on opioids for three weeks and the Amitiza worked so well I haven\';t had any issues!! Thank you Amitiza!!!"',
 '"Awesome!  My new boyfriend has a few issues; I believe it is all mental because of the bad relationships in the past.  He ordered this and then was prescribed this.  I told him he will go broke and he said it is sooooo worth it.  I orgasm every time, sometimes twice, and he does too.  Wow."',
 '"I am always bleeding between periods, I&rsquo;ve also gained 15 pounds and on a skinny girl it&rsquo;s very noticeable! My acne hasn&rsquo;t got worse or better. And now I&rsquo;m not getting my period when I should be. I am experiencing depression where I don&rsquo;t want to be around anyone I don&rsquo;t want to eat because I&rsquo;m gaining so much weight I&rsquo;m stuck in my head and lashing out at people. I&rsquo;m not my normal self. I wish I found a pill that rids my acne and doesn&rsquo;t affect my weight or sex drive.."',
 '"66 YO caucasian, male. Developed MS @22-23, diagnosed @30. Developed trigeminal neuralgia in 3/2014 lasting 7 days. Started on Carbamazepin 7/2014. TN returned 8/2015; constant ever since. Had microvascular decompression surgery on 6/3/2016. Pain ceased for 19 days after surgery then returned as severe as before. Surgery recovery was painful, left me weak, disoriented &amp; less mobile. Neurologist changed Rx: from Carbamazepine to Oxcarbazepine (300 mg, twice daily) 6 days ago. Deep facial lancinating pain has remissed but still have burning, electric jolting pain in upper lip and cheek. Also taking Tramadol HCL (50mg, once daily) which seems to help. Carbamazepine never worked. Oxcarbazepine/Tramadol combo seems effective."',
 '"Started taking it and I slept well at night and awoke early around 5 to start my day happily. But come 8 am and I am drowsy and needed to take already two hrs nap. Awake and resume\r\r\nMy day with not much difficulties. Than st 2 pm again I needed  a nap? So how was I gonna make it to work and my appointments too ? I went cold turkey. Felt much better after that. Only to crash again. I did try other anti depressants including pristique. But I suffered with insomnia with these meds.  I know I need to start again but so confused if I should resume welbutrin"',
 '"Drinking a few extra 16oz bottles of water during the period after taking the Milk of Magnesia will help stop the painful hard stools constipation usually brings. It will help ease the release. There can be different amount of time you can expect the recommended dosage to work. For me it\';s best taken on an empty stomach. No food for 4 hours or more helps speed the desired effect. If it\';s been several days since you normally have movements it will also take longer for the effects to begin. Drink water, as much as you possibly can. If diarrhea occurs cut back on water. Take the prescribed dose, not more. Drinking lots of water along with sufficient fiber in my diet has become much easier than fighting with constant constipation."',
 '"do not take this medicine without the supervision of an endroconologist.  It was NOT for me"',
 '"I appreciate Lithium. Although my thyroid level is low, a supplement helps to equalize this problem. I\';ve been through at least 20 different medications to stabilize my Bipolar diagnosis. I always wanted to be of normal state of mind. Lithium has allowed me to be equally yoked with myself. 300mg ER in the evening. 100mg of Seroquel in the evening. 20mg of  Cymbalta in the morning! I\';m set! If I\';m feeling anxiety I can add Busper or Loranzapam."',
 '"I\';ve been taking oxycodone for roughly 5 years....I\';ve gone a few weekends without it before because I\';ve ran out but never experienced any withdrawal symptoms.  It works great if you take it exactly when you need to and don\';t exceed your prescribed amount or take it early.  I\';ve been living with chronic pain for years...have had a complete joint replacement on one side and and anchor placed on the other side of my jaw. The surgeries help immensely but I\';ll still always be in pain.  Been taking the same dosage of 10mg 3x a day for the 5 years and yes my body is used to the effects so it doesn\';t work as well but it works well enough and I refuse to take a higher dosage or more pills per day because...well let\';s face it..this medicine is scarey"',
 '"I\';m 58 and recently started on this medicine. Almost immediate relief of vulvar dryness and pain. Not sure yet if the painful intercourse will be relieved but this looks optimistic to me after many months of intense pain. Medicine does not seem gooey or even noticeable when used. Really like it so far."',
 '"This medicine is absolutely terrible. After three months of using it my hair has fallen out so much so that I can see my scalp very visibly and it\';s very very embarrassing. I stopped taking it and am now considering a copper iud. No more hormones for me."',
 '"Had a cat bite me on my hand...full set of teeth and sharp. Hand swelled and was red. Took augmentin 8 hours after being bitten and within 3 days swelling went down and redness had faded. 6 years as an animal control officer and never injured once...help my friend pick out a cat at the local humane society and get bitten...oh the irony! This is an excellent medicine for cat bites. Had a friend tell me her dad got bitten by a cat and he ended up in the hospital and almost died from an infection. Lucky me from my experience I knew to seek medical attention immediately. Anyone bitten by a cat should know they have about an 85% chance of infection and need to take it very seriously or you\';ll end up in hospital."',
 '"So yes the first use was an experience. I had been so raw from constant itching that seemed to get worse within a few hours. I applied the cream to my lady parts and talk about wanting to take a cheese grater to your down under itchy fire parts. I had to take some Benadryl to help the itching. The vaginal insert of the cream wasn\';t bad until it melts....and then it gets itchy inside your lady cave so to speak. After the first hour it seemed to calm down a lot! I shouldn\';t have waited so long to have done something about it. I never had any thick discharge so I thought it was just a little irritated. I had never had a yeast infection and lord knows don\';t ever want to go through this again. But the product overall works."',
 '"Had sex on the 7th of August. Took Plan B about 23 hours after from the intercourse. Haven\';t gotten my period yet because I\';m not supposed to be due until the 20th of August but a major side effect that I\';ve been experiencing is a MAJOR amount of tiredness and exhaustion! When I got home from work the day after I took the pill, I went upstairs around 9pm to sleep and woke up the next day around 1pm. I wake up extremely exhausted and my feet start to get tired as well. Also I barely ever hungry anymore... I\';m 18 years old so this is very unusual for a teen... Hopefully my period comes soon."',
 '"My ears were ringing like crazy, I was almost to start break down and cry, but I was reading on one guys experience on how to best the ringing and everything he went thru I was going thru so I stsrted to do exactly what he said is to tune it out cause the more you think about it the worse it gets because with titinus you csn become your own worst enemy. So I keep reading on other testimonials and read alot  of people took zanax and it seemed to quite the ringing down.  So I had a zanax 0.5mg took it also because I couldnt sleep, the next day I woke up with a slight ringing and as the day progressed it went completely away Thank the lord.I truly believe that this oh s a condition thats related to the nrevous system there is s cure out.","Changed my life completely, I can actually function in social settings."',
 '"I started Prozac as one of my first anti depressants for MDD\r\n\r\n It made me horribly sick. I was nauseous all day, and wouldn\';t eat for days at a time. I stayed on it to try and get thorough the side effects but they wouldn\';t stop, I was throwing up every other day\r\n\r\nOne day I woke up and I started to violently shake, This lasted for over 12 hours until I ended up in the hospital with Tachycardia. \r\n\r\nThis was a horrible experience and months later I still have stomach and heart issues, I\';m on new medications now, But because of my bad experience I get very anxious when I take them","My genius psychiatrist started me on this drug in the fall of 2008.  The first few weeks I felt even worse than before I had started taking the fluoxetine.  After many months on the drug I was eventually taking 400mg a day, and having manic thoughts &amp; episodes.  My psychiatrist decided I was bi-polar and then started me on seroquel (rather than give me a break for my nervous system to re-adjust to it\';s natural state), which I also ended up taking for about 6 months and at about the same dose.  In retrospect I wish I hadn\';t taken either fluoxetine(Prozac) or seroquel(Quetiapine)."',
 '"I\';m 30 years old.  I started having really bad skin about 2 years ago from maybe stress in my life.  But, I tried EVERYTHING to get rid of it and it just got worse.  I finally went to a dermatologist and she put me on spironolactone.  My skin started getting better in about two weeks. I LOVED it. I\';ve been taking it for about 6 months and I get compliments from Makeup artist and models (I\';m a hairstylist) about how good my skin is.  Another plus for me is my breasts went from a small B to a C! I decided to stop taking it for a week and my breasts went small again and my skin is getting a little oily. So I\';m going back on. I only take one a day."',
 '"I\';ve suffered from panic attacks and anxiety for years.  I took Paxil for many years, but its effectiveness waned, and I hated the weight gain and sexual side-effects that came with it.  I switched to Luvox, starting with 25mg and it worked miracles.  Eventually, I had to move up to 50mg and now for the last two years 75mg.  I have had no adverse effects, and it has been a lifesaver.  Eventually, when my son was diagnosed with panic disorder (certainly inherited from me, much like I inherited it from my mother), his doctor tried Luvox for him, too.  His assumption was that our genetic similarity and our similar diagnosis might be treated by the same medicine.  He was right. Both my son and I are living anxiety-free, panic attack-free lives."',
 '"Awful medicine, the worst. The side effects outweigh the benefit.  Headache the first night, leg and back pain, Sensitive skin,  just awful. Pain got worse and worse. I changed my meds to ciproflaxcin. I have used this in the past so hopefully, it will continue to help. I even questioned the doc at urgent care to see if I can take cipro and she offered macrobid. Maybe this urgent care and this medication is something they get a deal on....stay away from macrobid."',
 '"I\';ve been on Latuda for a little under 2 and a half years. It almost completely stopped my psychotic symptoms except I still hear voices now and then, mainly when I try to go to sleep, but there are no delusions or paranoia while on the drug. I take cogentin in combination with it because it causes me to shake a lot. Main side effects I experience include anhedonia, shakiness, jaw clenching, and inability to sit still. However, I\';m happy with it because it actually works, while other antipsychotic meds I tried did not, and it doesn\';t cause the endless hunger that I experienced with drugs like Saphris, Haldol, Zyprexa, and Risperdal. It should be noted I am at the max daily dose, which is 160mg.","I\';ve been taking Latuda 40mg once a day in the evening  for 1 month for BiPolar.  I had been on various meds throughout my life for depression started when I had postpartum with both my children.  I am 45 now and my children are 17/14. I was on was Lexapro for depressrion for quite sometime that seems to run its course with me. Oh was diagnosed with MS in 1992 so add that piece to the puzzel.As far as Latuda,  I have mixed feelings. It seems to help me with focus and cognitive deficiencies, which I could be MS related.  Depression is there but not as it was, but I still cry and at times stay in my head too long.  I seem to be more agitated with my children.  Ativan helps with Anxiety when needed. I will be seeing my psych tomorrow to discuss."',
 '"I\';ve seriously only been using Epiduo for four days and have seen A HUGE improvement. My skin is a little dry but I use Cetaphil moisturizer to balance it out. I am also using Doxycycline along with the topical treatment (Epiduo) and my acne is getting soooo much better. LOVE IT!"',
 '"This cream is absolutely horrible. I will admit the cream initially does what is says it will do, gets rid of the redness. However this is completely temporary, around 6 hours in my experience. What comes afterward is a serious rebound. I spent the day outside in the cold weather (normally a trigger for me, which would normally warrant redness) and when I came back in around 6 hours later my face has never felt hotter in my life. My skin burned and was unbelievably deep red, it looked as if I had held my face up against a fire. This lasted around 2-3 hours. I used it once more thinking my skin needed to get used to it and the results were even worse. I threw away all of my samples after 2 days."',
 '"My blood pressure has been around 160/100. Doctor prescribed Azor 40/10. Just 4 hrs later my reading showed 120/82. I was amazed. I am now on it daily. Thanks to Azor."',
 '"I\';m 16 and  I have been on Loestrin 24 for about a week and half. The day I got them (and started taking them) was a day after I stopped my period and two days ago I started my period it is like a normal. I don\';t think I have gained weight due to me being sick and therefore don\';t eat as much as I normally do but I did not lose weight like I normally do when I\';m sick. I have been getting cramps which I don\';t normally get except the first one or two days of my period. I have been really depressed and I\';m not a depressed person. I mean I was crying over the stupidest things like my mom not cooking dinner when I wasn\';t even hungry. I\';m going to talk to my doctor tomorrow."',
 '"So far loving this. Stomach pain has almost disappeared, haven\';t had an attack in over a week. Down side is have to be near a bathroom about an hour after taking it but that is manageable. Hopefully it continues to work. Time will tell.","I been on it for two months. Started with the 145mg worked right of. Then the body got used to it didn\';t go for 2 weeks. Now on 290mg. For 2 weeks. Alright at times. But give time too see how does. The only next step I can see is surgery. But gastrointestinal doctor says no surgery too fix. 30 years off constipation. What more can I take. Only 39. Now have other medical problem from straining do much over the years."',
 '"I used it at bed time along with Paxil. I have anxiety and at times insomnia. The lower the dose(@ 7.5 mg), the more it becomes a sleep aid. It worked well for both anxiety and insomnia."',
 '"I suffer from chronic pain due to severe arthritis and stenosis in my lumbar spine. I take vicodin as needed to alleviate \';breakthrough\'; pain, i.e., occasional pain so great that my usual daily maintenance dose of Embeda ER (morphine/naltrexone) cannot relieve it. It works well, with the usual opioid side effects, hence a score of 8."',
 '"I just started this medication on April 1st and after 3 days I started seeing the effects and I can see it\';s taking it\';s course and working so far. The doctor started me on 40mg two times a day for 4 months. So far only side effect is dryness which was to be expected. "',
 '"Been dealing with restless leg syndrome.for about 2 years. It kept me from falling asleep. First they gave me flexiril. And it did nothing. Than a miracle came about and I was prescribed reprinol and my legs haven\';t twitched since . Amazing drug I must say. My sleep has improved greatly"',
 '"I dreaded the side-effects and had NONE.  I had the intravenous infusion three days before Christmas 2011 and was scared that I would be flattened by the supposed side-effects like flu-like symptoms, bone ache and so forth and was pleasantly surprised.  I am having my second one in just ten days time and hopefully it will be a repeat of the first one."',
 '"This is a very good medication IMO.  When you titrate up to the dose intended, you will notice subtle differences.  Many times I have thought that this had flattened me out but when I backed off the dose, symptoms came roaring back.  No noticeable side effects for me.  Helps stability very well, maybe the cause of some anxiety not much tho."',
 '"Have tried Paxil and Lexapro which sent me into hyper-panic and GAD. I was about to give up on medicines and accept my miserable anxiety as a fact of life when my Doctor recommended Buspirone. I noticed my anxiety began to taper the second day I took the medication. No real side effects to speak of through my first week. The one thing it has delivered for me, HOPE!"',
 '"I have been suffering with this anxiety problem for years and it was starting to interfere with my life.  I am a confident person socially, but my fear of presentations was huge and I would my voice would tremble to the extent where it sounded like I was full on crying. I researched medication for this fear and found propanolol. My doctor prescribed me with 80mg Half Inderal (Propanolol) and despite what some say, he was not hesitant about giving me a prescription and said he regularly gives it to musicians/public speakers etc. It has worked wonders for me, I no longer embarrass my self and now feel happy and confident. You may still feel nervy, but the adrenaline does not kick in. I have not suffered any symptoms and only take it seldomly."',
 '"My 9 year old son has been on various medicines for ADHD since he was 6. We just switched to Focalin 10 mg about 2 weeks ago. We are noticing that by about 1:00 in the afternoon it is completely out of his system and there is no focus. We are going to try a booster dose of 5 mg in the afternoon. I\';m going to talk to our doctor about lowering his morning dose because he feels shaky and tired, which I thought would have subsided by now. His focus is terrific but I wonder if we can get the same results by knocking down the dose a bit and adding the booster. Other than that, his sleep and eating habits are the same. Whew!"',
 '"I took Jolivette 6 weeks after I went home with my first baby.  A year after we went on vacation for four days and I forgot it at home. After vacation I took it and everything was fine. A week later I got my period. I thought it wasn\';t a big deal, or was maybe because I miss all those days. It last 5 days. 2 weeks after that again but now lasting 7 days. Then I started to get my period every week and now every 3 days! Lasting 7 days! Worked amazing in the beginning but I messed it up."',
 '"I was prescribed this medicine for bronchitis, 500mg. for 7 days. It really cleared up the bronchitis, but left me with bad tendonitis in my right leg.  No telling how long this will go on.  I can barely walk when I first get up in the morning, although it gets better with gentle exercise.  I too have noticed crazy dreams, no dizziness, but I think it is causing me to make some bad decisions.  Do not take this medicine for anything under any conditions.  Find some other drug.  The side effects are unpredictable, come on after you have already stopped taking it, and are miserable.  I\';m going to try some of the remedies the other reviewers have mentioned."',
 '"I have been using Qsymia for a little over 3 months. I have lost 50 pounds. I\';m 30, have 1 child and couldn\';t lose weight no matter how long I stayed in the gym. There is no magic pill that works for weight loss without DIET AND EXERCISE! You need to do these things to see these type of results! I will say in the beginning my side effects were awful I always felt tired but I pushed passed that and it went away. I have since gone off my blood pressure medicine as well. I would recommend following closely with your doctor if you are on BP meds though because my blood pressure dropped so quick I was fainting. Not from Qsymia but from getting healthy so fast.","I have been on the Qysmia for 3 weeks now.  I wanted  to wait a few weeks  to give a review. I have a very slow metabolism so I  did not lose as much as some in the first two weeks  upon taking.  My weight started at 198.  I am down to 193. So I  have lost  5 lbs in 3 weeks.  But that  is with  out cardio.  My  appetite  is suppressed.  Dry mouth.  So drink a lot of water. Tingling almost numbness in my feet at times but it goes away shortly after. The  medication  if not covered  or with the free trial  is expensive.  So be prepared.  I guess it  is cheaper  than weight loss surgery.  But it\';s no magic pill neither.  Like any other pill  you must eat right and exercise. To lose the weight.  Well that\';s  my take anyway."',
 '"I try not to take medicine unless I am really sick but my doctor recommended I take cephalexin for a small cyst on my eye lid.  I decided to try it because antibiotics are one of the medicines I believe are very good when you are sick and your body needs a little help to heal.  My dosage was three 500mg per day for 10 days.  After the first day I developed stomach cramps and diarrhea.  I was not sure if it was due to the medicine so I continued to take the cephalexin for two more days.   When the condition did not get any better I stopped taking the cephalexin.  It has now been a week since I first took the cephalexin and I still have stomach cramps and diarrhea.  I advised my doctor\';s office of my problem but they have not called me yet."',
 '"I took Aviane for about 3 years. I gained very little weight when I began taking it, but quickly dropped the lbs when I started paying attention to how I was eating. I never had any issues with an irregular period or acne, but my main side effect was moodiness. It took me a couple of years to figure out why I\';d become this hyperemotional person, but then after much research, realized it was the Aviane. I began to pay attention to my moods and regulate my mood swings, which helped. I\';ve been off the pill for over a year now, but if I had to go back on birth control, I would choose this one again."',
 '"I\';ve been on this medication almost a full month. I never feel hungry and have been eating WAY less than I ever have, however the scale has not moved. Bad heartburn has been my only side effect. I\';ll try it one more month and then if no weight loss, I\';m going to stop. Disappointed...and I had to pay $1,000 out of pocket!"',
 '"This med caused me to hear internal voices (auditory hallucinations, but in my head). Made me paranoid, anxious, scared to be alone, tired, nauseated, no appetite,  and felt schizophrenic. Started at 50 mg, coming off immediately, per my PDoc. I hope it gives you relief, as most seem satisfied. Bummer it wasn\';t my life saver."',
 '"Depo has been great for relief of pain from endometriosis. I am on my 3rd shot. No more period, but I do spot the whole month before the next shot is due. I am hoping that will stop as my body gets used to it more. The shot is painless, the only side effect I have noticed is minor weight gain and my sex drive has decreased a bit. I am okay with that at least the pain is gone. I got scared reading what everyone had to say about this drug and almost didn\';t get it. I am glad I took the chance to see how &quot;I&quot; reacted to it. Everyone is different. I am very satisfied with it."',
 '"I am female in her early 30\';s - about 3 years ago I developed adult acne after years of relatively clear skin. Benzyol peroxide had been my miracle acne product but then I developed contact dermatitis and could no longer use it :( I honestly could not go more than a day without a new pimple developing despite using other prescription acne grade products, vitamin A as well as expensive spa treatments. I have been on Aczone about a month and have had instant results, I have not had a cystic pimple since. I still get blackheads and have milia on my chin/jawline but no pimples/whiteheads/cysts to speak of and have had no issues with dry skin. The product is pricey but I will save in the long run not wasting my money on others that don\';t work.","Hi, I\';ve been using this product over 3years and I\';m completely satisfied. My skin in super dry and It\';s really really working for me. While I\';m using this, my face is clear. I\';ve tried everything but nothing worked except ACZONE!!! \r\r\nIt\';s expensive but totally worth it, give it a try."',
 '"I smoked for 32 years and tried different times and products to help me stop but always failed.  My doctor and I agreed for me to try the Nicoderm CQ patch and it\';s really helping me. I have no urges to smoke and am now on Day 8.  The only thing I found out is that I have red swollen itchy skin where the patches were worn. Need to talk to the doctor but office is closed on the weekends.  I\';m thinking I could be allergic to them but don\';t want to stop them because they are working for me"',
 '"I\';m Planning to be  put in 17 Days in residential treatment and follow it up with vivitrol injection.  I just worry because I hear that it\';s incredibly painful, but I an only really trying to get away from the subs... I\';m down to less than 6mg but I\';ve been IV\';ing them.  I still wouldn\';t think my bupe dose is high enough to worry about after 15 - 17 days... \r\nA friend did tell me that if you are clean enough to be eligible for it, it will make you feel like a million bucks! I\';m extremely hopeful, and was hoping for some insight and / or advice, but I believe this is an awesome chance to get my life back, even though I am afraid of the sword length rig they use to do it... \r\nI just hope it all goes as well as planned, or better... \r\n#VeryAnxiousNow"',
 '"I was prescribed Restasis by my ophthalmologist due to severe dry eye caused by Accutune. I was given a card that gave me a discount since I did not have private health insurance and used each vile over 2-3 days so that it became effectively very cheap for me to use. I had side effects at first, burning eyes and blurred vision. I was told it takes a minimum of 3 months to see any benefits so I kept using it. It worked almost too well, as my eyes started producing tears so much that my eyes would water all the time. I stopped using the product after 1 year, and my eyes have improved so much I no longer need to use it, although I still use regular over the counter eye drops (Systane Balance) once or twice a day as needed"',
 '"Decreased my sex drive and physically in a lot more pain in my joints... It\';s good for women over 25 but under 25 is not the best"',
 '"I started 5mg of olanzapine last night. I have not slept or felt calm in a couple months. I have dealt with Bipolar 1 and ADHD for many years. I went to my Psychiatrist and was told that for my condition I should not be on things like Celexa that I was taking at 40mg at night. Those serotonin medications can hype me up especially at night. So the only other medicine I take is Inderal LA 120mg for tremors I have from a neurological condition since childhood. I slept great last night for the first time in a long time. I also feel much more at ease in gathering my thoughts and focus. I just hope it continues and I do my part in staying stable too."',
 '"Great product I have been on other drugs that gave me back side effects-rash, itching, dry mouth, constipation, headache, dizziness, back pain, etc. I urinate on average 20-40 times a day every approx 15-20 minutes, after using the patch I went as long as 2 hours without using restroom. my skin is irritated and red but better than spending my whole day in the bathroom. I cant believe my doctor didn\';t put me on this over the counter drug first before spending hundreds of dollars on prescription medications. I have suffered for over 30 yrs with the issue of urgency and frequency this is a miracle for me.  Praise the LORD"',
 '"I was essentially mis-prescribed Actiq when I should have been getting fentanyl patches for my cancer pain.  This caused problems with both bolus dosing (transient overdosage) and build-up of opioid tolerance with the Actiq that have not been nearly as great a problem with fentanyl patches.\r\r\n\r\r\nOther patients may have different experiences; however for chronic cancer pain, the patches might be considered before use of Actiq."',
 '"My experience with this product is a lot different from everyone else\';s. I have never had a really really bad acne just a few spots here and there so when I went to see the dermatologist they prescribed me this gel to put on every night over my whole face. Firstly everything was going fine I didn\';t see a difference and then after a week my skin had cleared up and it look flawless. However one night when I put my cream on and then waking up on the next morning my skin was literally burnt and my forehead was covered in those little spots which was terrible and they looked even worse with make up on because it was extremely bumpy. I stopped using the gel and it when away but was really bad.","Update:\r\r\nMy skin initially cleared up for the First week but then the next 2-3 weeks were horrible with a lot of breakouts!\r\r\nFor the first 3 weeks my skin was so red, painful, dry and peeling. Then all of a sudden everything went away...\r\r\nMy acne is minimal/almost completely gone after a little over a month and my skin feels so hydrated! Such a great product!"',
 '"When I was a 15 year old freshman in high school I broke out with severe acne. In literally one week my skin went from perfectly clear to large acne blotches on my cheeks, chin and neck that were painful to touch. After trying everything in the arsenal at the time (monocycline, benzaclIn, finacea, etc.) my dermatologist recommended Accutane. My only side effects were ridiculously chapped lips, dry skin on my face, and some joint pain. After a month and a half of treatment my acne was gone completely, and my skin clearer everyday thereafter. I was so depressed with the acne but this medicine changed my life for the better as I have never needed to use/take another acne medication following that 4 or 5 month treatment."',
 '"2mg of xanax works perfectly for my panic attack when i feel one coming on i take one 2mg pill and it takes it away and i am no longer being run by my panic attack."',
 '"This medication is amazing! After 3 days of being extremely sick, I started to feel amazing, I am now 1 month into it and am so happy all the time and have no depressive thoughts at all. It kind of blocks out any sad thoughts. Works perfectly for me."',
 '"Accurate information."',
 '"I was diagnosed with adult onset Diabetes last Dec. I started on\r\r\nMetformin 750 and almost immediately my fasting glucose dropped\r\r\nto 94. That is what it has been since but I have been bothered with\r\r\nneuropathy for  months. I tried Lyrica for 3 months and it did\r\r\nabsolutely nothing for the pain. I am presently taking gabapentin\r\r\n300 mg at bedtime and it helps slightly. The cost for the Lyrica\r\r\nwas money out the window."',
 '"took one 25mg to help me sleep however the next day I felt awful like id been drugged just couldn\';t wake up this lasted all day.i wont be taking them again .my wife on the other hand takes them every night with no problems"',
 '"I\';m 31 &amp; have used many birth control options, beginning with the patch @ 19 then going to the pill within the year. My MD RX\';d me the loestrin 1/20 a year ago. This past year proved the best for me as far as overall health: fewer skin breakouts, MUCH lighter &amp; shorter periods (i frequently donate blood and am not iron-defficient anemic), better sex drive (husband loves), and moodiness not as bad. I have gained 7lb of weight but cannot pinpoint it directly to this pill as I have chosen a less healthy lifestyle the past year. The only negative about this pill for me was I did not stay on a 28 day cycle and had breakthrough bleeding. Today, MD changed me to loestrin 1.5/30 for this reason."',
 '"First of all I\';m not and never have been a smoker. Have COPD due to chronic bronchitis, I developed asthma after 40. I\';ve been taking this product for five yrs and the illness due to weather has decreased dramatically I had previously suffered from pneumonia due to worsening bronchitis at least twice a yr. I average once every three years now it is due to consistently taking this year round."',
 '"Used Cardura XL on/off for several years now and more regularly recently. Wanted new prescription after moving to Europe, however doctor didn\';t now the product and recommended as alternative Tamsulosin (Pradif T) which did not provide any relieve with urinating especially at night (blocked). Switched back to my remaining Cardura XL and found equivalent product in Europe called Cardura CR. Just perfect flow, day and night! No side effects."',
 '"I just want to say that after taking a lot of other anti-depressant meds, this is THE ONE! Besides only having 1 side-effect (diarrhea), that went away after 2 wks, it\';s really changed my life!!! i recommend this to anyone who has tried other meds that have not worked"',
 '"I am 29 and just had my second Mirena inserted a few days ago. It was painful, but the pain only lasts for around 30 seconds if it goes smoothly.  I have seizures, and have chosen Mirena because it does not interact with my medicines. Other forms of birth control have caused more seizures. I do not have this problem with Mirena. It has not affected my skin (although I currently use medication for acne I\';ve had for years).  I like it because after it\';s inserted, I can forget about it for a few years.  The only thing I\';ve found inconvenient, is having a partner be able to feel the strings.  BUT my gyno said most men are not even aware.  ","I love my Mirena. I\';m due in February to take it out because my 5 years are up. It did not bother me at all to get it inserted. It was pretty easy, I had minor cramps after. I got it because I had gotten pregnant at 16 and had my daughter at 17. I got it because I knew my boyfriend and I were not ready for another child. On top of that from the moment I got my period it was hell. I got my period a month after insertion and ever since then it\';s been a smooth ride. I haven\';t had a period since and definitely have not gotten pregnant again. I guess its true when they say everybody takes differently to it. So come February I plan on getting it again for another 5 years. I\';m one happy customer."',
 '"This is absolutely the best birth control I have ever used. I switched from Nexplanon to Ortho Evra, and if you are thinking of doing the same, I highly recommend it.  Let me list the reasons why:\r\n1. Weight loss. I have lost 5lbs in one month, without even trying!  I\';m back to the weight I was before I started birth control...but my breasts are still birth control sized.\r\n2. Sex drive. Mine had been non-existent since I went on Nexplanon in September. Now, stronger than ever. That might be a downside though, now that I think about it.\r\n3. Skin- no acne!\r\n4. Predictable cycle. (On Nexplanon, I never knew when I was going to menstruate, which was about 90% of the time). Now, a non issue.\r\n5. Don\';t have to remember everyday."',
 '"I\';ve received spinal injections because after a serious car accident I\';ve been left with severe pain and will do anything to relieve it. Anytime I get an injection, they give me propofol before the injection and I\';m knocked out within a few seconds and then awake a few minutes after the procedure. After about 15 minutes I\';m ready to get up and leave and am able to walk and function normally with absolutely no hangover or side effects."',
 '"Had open heart surgery and double mastectomy in a span of 2 years. Very painful nerve pain most of the time. Bio- Freeze (Roll- On) Definitely works for the pain. Unfortunately it has literally burned my chest. Don\';t want anyone to go through this.Thank you, Be well everyone."',
 '"My rheumatologist put me on Plaquenil for UCTD.  Two days later I started having migraines, fits of crying, anxiety attacks, irritable, very depressed, and feeling almost convulsive.  When the doctor took me off the medicines, I slept for 15 hours, just getting up to have dinner and going back to bed.  This medicine is NOT for me."',
 '"OMG !!!  I SWEAR I\';M NOT A PAID PERSON !!!!\r\nI\';ve got a bad back and in the past I\';ve used this and that with no success after spending all that money.  \r\n I\';m 288 pounds.  I eat NO JUNK FOOD, NO FAST FOOD, NO BREAD,\r\nRICE\';S, PASTA\';S ! All I do is juicing fruits n veges and take belviq. I lost nearly 10 lbs in a week!!!"',
 '"My Endo insisted I switch from lantus to tresiba.  I was quite stable on lantus and humalog for over 15 years but she said it was better.  I\';ve been a diabetic for almost 30 years and so I was very hesitant to switch.  I should have listened to myself.  The first 3 weeks were okay but not better.  Then I started feeling breathless and fatigued.  It took me awhile\u200b to realize it was the tresiba.  I switched back to lantus a week ago and I am already feeling better.  No more breathlessness or fatigue.  My blood sugars were worse on tresiba so it will take a bit to straighten out my a1c.  I really should have listened to my gut.  Just because it\';s new doesn\';t mean it\';s better."',
 '"This drug causes persistent nausea in some users as per their website. For most people it goes away after a few weeks--but not all. Initially I was also itchy and a little weepy (went away after 2 weeks). If you have a history of being unusually nausea prone (ie pregnancy) in my experience you may wind up in the persistent nausea group. I will have to switch as I don\';t want to be chained to zofran. Otherwise, worked fine as an alternative to paxil. Fewer side effects--unfortunately the one side effect it did cause is pretty debilitating in my case!"',
 '"I\';ve only had one dose of Lupron; before going on it I did my research. One side effect is HORRIBLE insomnia (which I have). I know not every single change in my body can be blamed on the Lupron. I have Endometriosis and the Lupron basically puts you in a state of menopause. Headaches, insomnia, sweats, mood swings were very bad the first couple of weeks; now my stomach hurts! So I think I can pick and choose what the medicine is responsible for and the state of chemical menopause is doing to me."',
 '"I have been taking Zanaflex for about a year now and it has been wonderful for me.  I have Ankylosing spondylitis and fibromyalgia.  I have a very hard time sleeping at night but Zanaflex helps me sleep and keeps down the muscle pain."',
 '"Agree with the majority of reviews. Itching/burning is so much worse after immediate application. Side effects not accurately stated. Waste of money. Will never use again."',
 '"This medicine did nothing at all for my pain. Glad it works for some, but it didn\';t for me!"',
 '"I was having severe bleeding with large clots which lasted for 3 weeks. Finally saw the Doctor and he gave me 10mg for 10 days. This is day 9. I stopped bleeding 2 days ago. I love this medicine, really. I\';m hungry more often, but that\';s okay. Unsure what will happen when I stop taking it.","I\';m 24 years old and have always had a pretty regular period. I missed a period last month and immediately went to the dr to make sure everything was okay. He confirmed it was probably stress due to the numerous issues I listed and prescribed provera 10mg once a day for 10 days. He said this would make me have a period after the 10 days so that my next period wouldn\';t be so bad. Day 1 didn\';t sleep for 27 hours. Day 2 I got extremely weak but couldn\';t sleep at all and the cramps started rapidly. Day 3 I\';m in tears from all the pain and pressure in my lower stomach and back. Day 4 I can\';t get up from heating pad no appetite face is broken out in red blotches I\';m bloated and feel huge and my mood is terrible. I will not take another pill. Ever"',
 '"So much better than the creams."',
 '"I was prompted to write this after reading some of the negative reviews. God how I wish this would work for everyone. I have only been on it for around 7 months but my first scan was promising (I have bone metastasis and there were no new spots and previous lesions appeared smaller). I go for my next scan in a few weeks. I\';m so fortunate in that I\';ve had no side effects. Your neutrophils will dip and yes, I\';m tired at times but what else is new. I know that some are experiencing terrible side effects but I wanted to chime in and say that not everyone experiences them. I do take spirulina pills and they seem to help get my neutrophils where they should be (above 1.0). If you are a candidate for ibrance, count yourself lucky and try it!"',
 '"Been on Reclipsen for a few months now. Pros- lighter periods, no stomach cramps, no acne, no babies. Cons- mood swings, TERRIBLE back pain during period, lower sex drive, no weight gain (if already active)."',
 '"I\';m a 27 year old white male in good shape but have always had high blood pressure...I\';m guessing genetic. My blood pressure would run anywhere from 130-160 over 85-105. The doctor tried a diuretic which did nothing, and then a beta blocker which had horrible side effects. They finally tried 10mg of lisinopril and wow how great! It almost immediately brought my blood pressure to 118/80\';s. I actually cut my dose to 2.5 mg in the morning and 2.5 mg at lunch and my blood pressure stays perfect all day and night. I have had no side effects whatsoever and wouldn\';t even know I was taking any medication if it weren\';t for my lowered blood pressure. Highly recommend!"',
 '"I have been taking Jardiance for just over a year - I have NOT experienced any side effects whatsoever - MORE importantly this drug has reduced my blood sugar levels to an average of 5 and has maintained this level, quite incredible as nothing else has worked previously - I have named Jardiance as the &quot;diabetic wonder drug&quot; although my Doctor keeps reminding me there is no such thing as a wonder drug - I disagree this is MY wonder drug - thank you Jardiance you have changed my life completely astonishing result."',
 '"I take all types of pain meds but Naproxen doesn\';t last an hour before my cramps come back. I just took one and it made my cramps worse and I\';m like forget naproxen. One pill doesn\';t do jack."',
 '"I had severe vomiting and diarhoea for 3 days caused by clarythromycin. After being treated for dehydration at the hospital, clarythormycin was replaced with doxycycline, and I have no problems since."',
 '"I had my first atrial fibrillation crisis 3 moths ago. They cardioverted me, the doctor put me on metoprolol succinate ER 25mg for the first month and now I\';m on on metoprolol tartrate 25mg. "',
 '"I am on opoids for chronic back pain. Used Miralax and Metamucil but was bowel movements irregular and felt like I was emptying out was backing up. Tried 25mg on empty stomach at 3pm yesterday for first time. Started having cramps. Called my doc and added a suppository. Twenty minutes later had massive BM over 30 minutes. None after that. This morning, woke up in withdrawal, cold, nausea, abdominal cramps, horrible pain and feeling lousy. Odd as my last pain med dose was six hours before, and I do not get withdrawals that quickly. My morning pain meds fixed withdrawals but was still in significant pain until 1pm after second pain med dose at 12. Seems to decrease pain reducing effects of opiods."',
 '"Got skyla inserted about a month ago a few days after my last period. The insertion was uncomfortable but not bad at all. Had severe cramps the first week after insertion but it was managed by ibuprofen. I\';ve been spotting since inserted but had one week without. Started my period last week and it\';s just been light, almost like spotting (very very annoying). I usually have a 5/6 day period but I\';m now going into day 8. Hoping the spotting stops soon so I can stop wearing pads. Good luck to all who try this!"',
 '"Received 3-month shot two weeks ago to stop heavy menstrual bleeding in preparation for a hysterectomy next month. My period started and the bleeding is just as extreme as usual. No relief in blood or pain with this drug. Have experience hot flashes (minor), headaches (minor), night sweats, nausea (moderate), and have pain in upper right back area. Will be seeing doctor later this week to get checked on. I know it\';s early in the process, but I\';m disappointed. I took it knowing about the side effects, but was willing to go along with them to get my bleeding under control and to build up my iron stores."',
 '"This pill works!\r\r\nI decided to share my experience with you because when I had unprotected sex I was searching like crazy to find out a solution.\r\r\nFirstly, I had unprotectes sex august 20th, and the next day I swear, I was extremely anxious and nervous, I was about to die.. I took Ella 30 hours after, and after some days I decided that what I could do, is wait... so I stoped worrying and became comfortable, and I was waiting for my period.. finally it came a week late.\r\r\nSo, because I know the struggle, DO NOT PANIC, this pill is very very effective because you dont get pregrant immidietly.. but remember to always have PROTECTED sex...in case you dont ..there\';s ella xx"',
 '"I was prescribed benzonatate today for the third time in the last few years. I have a wicked sinus infection and hacking cough. Every time I have been prescribed benzonatate, I have had a good attitude, &quot;Maybe this time it will work.&quot; Every time I have used it, I have felt like I was given a placebo by mistake. No side effects at all, but it has never worked for me. Not working today either.  Still hacking."']


var str="Disease Predicted";
var x='';
var y='';
var a='';
var b='';
var c='';

const showModal=(e)=>{
  setVisible(true);
  
};
const handleok = (e) =>{
  setVisible(false);
};
const handlecancel = (e) =>{
  setVisible(false)
};  

const handleDis= (value) =>{
  x='Symptoms of the diseases are :\n'+symp[value];
  a='';
  b='';
  c='';
  console.log(value);
};  

const handleMed= (value) =>{
  x='';
  a='Disease treated by the medicine is : '+drugdisease[value];
  b='\n\nRating for the medicine is : '+drugrating[value];
  c='\n\nTop Review for the medicine is :\n'+drugreview[value];
  y='Disease treated by the medicine is : '+drugdisease[value]+'\n\nRating for the medicine is : '+drugrating[value]+'\n\nTop Review for the medicine is :\n'+drugreview[value];
  console.log(value)
}; 
 const children = [];
for (let i=0; i < disease.length; i++) {
  children.push(<Option key={i}>{disease[i]}</Option>);
}

const child=[];
for (let i=0; i < meds.length; i++) {
  child.push(<Option key={i}>{meds[i]}</Option>);
}
const  test1=(event) => {
	event.preventDefault();
      
      str="Disease Review ";
      setResult(x);
      setResult2('');
      setResult1('');
      setResult3('');
};
const test2=(event) => {
	event.preventDefault();
      
      str="Medicine Review ";
      setResult('');
      setResult1(a);
      setResult2(b);
      setResult3(c);
};
    return (
      <>
      <div class='logo'>
      <LoginNav/>
      <div class="container bgg">
      <Modal
          title={
            <div
              style={{
                width: '100%',
                cursor: 'move',
              
              }}
              onMouseOver={() => {
                if (disabled){
                  setDisabled(false);
                }
                
              }}
              onMouseOut={() => {
                
                setDisabled(false);
              }}
              
              onFocus={() => {}}
              onBlur={() => {}}
              
            >

              {str}
            </div>
          }
          scrollable={true}
          visible={visible}
          onOk={handleok}
          onCancel={handlecancel}
          modalRender={modal => <Draggable disabled={disabled}>{modal}</Draggable>}
        >
        <div >
          <pre >
          	{result}
          </pre>
        </div>
        </Modal>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className='col-10 mx-auto'>

    
    <Row>
      <Col span={24}>
      <h2 className="text-center"><b><br/>Tell us what it is,<br/> We tell you what comes with it !<br/></b></h2>
      </Col>
    </Row>
    
    <Row><br/><br/></Row>
    
    <Row>
    <Col span={12}>
    
    <Select style={{ width: '90%'}} showSearch placeholder="Enter the Disease" onChange={handleDis}>
    {children}
  </Select>
    </Col>
    
    <Col span={12}>
    
    <Select style={{ width: '90%' }} showSearch placeholder="Enter the Medicine" onChange={handleMed}>
       {child}
    </Select>
    </Col>
    
    </Row>

    
    <Row><br/><br/></Row>
    <Row >
    
    <Col span={12} >
    <div class="bc">
    <StyledButton1 className="text-center" type="primary" onClick={test1}
    >
    Know about your disease!!
    </StyledButton1>
    </div>
    </Col>
    
    <Col span={12} >
    <div class="bc">
    <StyledButton1 className="text-center" type="primary" onClick={test2} >
    Know about your meds!!
    </StyledButton1>
    </div>
    </Col>
    
    </Row>
    
    <Row><br/><br/></Row>
    
    <Row>
      <Col span={11}>
      
      <div class="ct3" className='text-center'>
      {result}<br/>
      </div>
      </Col>
      <Col span={1}>
      </Col>
      <Col span={12} >
      <div class="ct3" className='text-center'>
      {result1}<br/>
      {result2}<br/>
      {result3}<br/>
      </div>
      </Col>
    </Row>
    <Row></Row>
    </div>
    </div>
            </div>
        </div>
    <Row>
        <Col span={12}><img src={sympimgb} className="img-fluid animateda" alt="alternate"/></Col>
        <Col span={12}><img src={sympimg} className="img-fluid animatedb" alt="alternate"/></Col>
    </Row>
    </div>
      </>
    );
  }

export default Symptom;