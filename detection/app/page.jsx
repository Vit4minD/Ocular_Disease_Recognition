'use client'
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { SpinnerDotted } from 'spinners-react';
import { FaEye } from "react-icons/fa";

const classes = {
  0: "Age related Macular Degeneration (A)",
  1: "Cataract (C)",
  2: "Glaucoma (G)",
  3: "Pathological Myopia (M)",
  4: "Normal (N)",
}

const links = {
  0: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/agerelated-macular-degeneration-amd#:~:text=Age%2Drelated%20macular%20degeneration%20(AMD)%20is%20a%20disease%20that,diet%20high%20in%20saturated%20fat.",
  1: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts#:~:text=What%20are%20cataracts%3F,to%20get%20rid%20of%20cataracts.",
  2: "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma#:~:text=What%20is%20glaucoma%3F,a%20comprehensive%20dilated%20eye%20exam.",
  3: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7731360/",
  4: "Normal (N)",
}

export default function Home() {
  const [prediction, setPrediction] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const [bestIndex, setBestIndex] = useState(0);
  const [bestAcc, setBestAcc] = useState(0);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        handleFile(file);
      }
    },
  });

  async function handleFile(file) {
    try {
      setSubmitting(true)
      const formData = new FormData();
      formData.append('file', file);

      const response = await axios.post('http://127.0.0.1:5000/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      await delay(800);
      await setPrediction(response.data.prediction);
      setSubmitting(false)
      for (let i = 0; i < prediction[0].length; i++) {
        const acc = Number(prediction[0][i].toFixed(2)) * 100
        if (bestAcc < acc) {
          setBestAcc(acc)
          setBestIndex(i)
        }
      }
      console.log(response.data.prediction)
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  }

  return (
    // <main className="p-4">
    // <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-4 rounded">
    //   <input {...getInputProps()} />
    //   <p>Drag 'n' drop an image here, or click to select one</p>
    // </div>

    //   {prediction && <div className='flex flex-col'>
    //     <p>Prediction</p>
    //     {prediction[0].map((item, index) => (
    //       <p key={index}>Accuracy: {item.toFixed(2)}</p>
    //     ))}
    //   </div>
    //   }
    // </main>
    <html className='w-[100%] h-[100%]]'  >
      <head suppressHydrationWarning>
        <title>Ocular Disease Recognition</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="/assets/css/main.css" />
        <noscript><link rel="stylesheet" href="/assets/css/noscript.css" /></noscript>
      </head>
      <body class="is-preload">


        <div id="page-wrapper">

          <section id="banner">
            <div class="inner">
              <div class="logo"><span class="icon fa-eye"></span></div>
              <h2>Ocular Disease Recognition</h2>
              <p>Multiclass Disease Classification by Group 2 Medlytics</p>
            </div>
          </section>


          <section id="wrapper">


            <section id="one" class="wrapper spotlight style1">
              <div class="inner">
                <a href="#" class="image"><img src="images/eyedoctor.jpg" alt="" /></a>
                <div class="content">
                  <h2 class="major">Eye Diseases are Extremely Common</h2>
                  <p>The World Health Organization estimates that over 2.2 billion people have some form of vision impairment or blindness. Many conditions that affect your eyes happen because of or in connection with conditions affecting other body systems. That’s why hundreds of different conditions can affect your eyes.</p>

                </div>
              </div>
            </section>


            <section id="two" class="wrapper alt spotlight style2">
              <div class="inner">
                <a href="#" class="image"><img src="images/eye.jpg" alt="" /></a>
                <div class="content">
                  <h2 class="major">Unpredictablity</h2>
                  <p>Many eye diseases occur unpredictably, making it impossible to prevent or lower the odds of having them. Eye diseases typically worsen or become more dire the longer they are left undiagnosed and untreated.</p>

                </div>
              </div>
            </section>


            <section id="three" class="wrapper spotlight style3">
              <div class="inner">
                <a href="#" class="image"><img src="images/retina.jpg" alt="" /></a>
                <div class="content">
                  <h2 class="major">Early Diagnosis</h2>
                  <p>Most eye diseases are detected by observing subtle changes in the appearance and structure of eye anatomy. Our model intends to classify the presence of an eye disease based on  Retina Scans.</p>
                  <a href="https://powerseyecenter.com/services/eye-disease-early-detection-and-treatment/" class="special">Learn more</a>
                </div>
              </div>
            </section>


            <section id="four" class="wrapper alt style1">
              <div class="inner">
                <h2 class="major">Common Eye Diseases</h2>
                <p>Our dataset included patients diagnosed with diabetes, glaucoma, cataract, age related macular degeneration, hypertension, and pathological myopia. </p>
                <section class="features">
                  <article>
                    <a href="#" class="image"><img src="images/glaucoma.jpg" alt="" /></a>
                    <h3 class="major">Glaucoma</h3>
                    <p>A group of eye diseases that can cause vision loss and blindness by damaging a nerve in the back of your eye called the optic nerve. </p>
                    <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/glaucoma#:~:text=What%20is%20glaucoma%3F,a%20comprehensive%20dilated%20eye%20exam." class="special">Learn more</a>
                  </article>
                  <article>
                    <a href="#" class="image"><img src="images/cataract.jpg" alt="" /></a>
                    <h3 class="major">Cataract</h3>
                    <p>A cloudy area in the lens of your eye (the clear part of the eye that helps to focus light).</p>
                    <a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/cataracts#:~:text=What%20are%20cataracts%3F,to%20get%20rid%20of%20cataracts." class="special">Learn more</a>
                  </article>
                  <article>
                    <a href="#" class="image"><img src="images/age.jpg" alt="" /></a>
                    <h3 class="major">Age related Macular Degeneration</h3>
                    <p>A disease that affects a person's central vision.</p>
                    <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/agerelated-macular-degeneration-amd#:~:text=Age%2Drelated%20macular%20degeneration%20(AMD)%20is%20a%20disease%20that,diet%20high%20in%20saturated%20fat." class="special">Learn more</a>
                  </article>
                  <article>
                    <a href="#" class="image"><img src="images/myopia.jpg" alt="" /></a>
                    <h3 class="major">Pathological Myopia</h3>
                    <p>Myopia is defined as refractive error by which the image coming into the eye is focused in front of, but not on, the retina.</p>
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7731360/" class="special">Learn more</a>
                  </article>
                </section>
                <ul class="actions">
                  <li><a href="https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases" class="button">Browse All</a></li>
                </ul>
              </div>
            </section>

          </section>


          <section id="footer">
            <div class="inner">
              <h2 class="major text-4xl text-center">Classify Your Retina Scan!</h2>
              {prediction === null ? (
                submitting ? (
                  <div className="m-0 flex flex-row w-full h-[28rem] items-center justify-center border-dashed border-2 border-gray-400 p-4 rounded">
                    <SpinnerDotted color="white" size={150} thickness={150} enabled={true} />
                  </div>
                ) : (
                  <div {...getRootProps()} className="m-0 flex flex-row w-full h-[28rem] items-center justify-center border-dashed border-2 border-gray-400 p-4 rounded">
                    <input {...getInputProps()} />
                    <div className='flex flex-col justify-center items-center gap-y-4'>
                      <FaCloudDownloadAlt className='text-center text-9xl' />
                      <p className='m-0 font-semibold text-2xl'>Drag & Drop to Upload File</p>
                      <p className='m-0 text-2xl text-center'>OR</p>
                      <button className=''>Browse Files</button>
                    </div>
                  </div>
                )
              ) : <div className='flex flex-col text-center justify-center text-2xl items-center'>
                <FaEye className='text-6xl mb-4' />
                <div className='flex flex-row gap-x-4 mb-8 justify-center items-center w-[95vw]'>
                  <a href={links[bestIndex]}className='text-6xl underline hover:cursor-pointer underline-offset-[6px] hover:decoration-[8px]'>{classes[bestIndex]}</a>
                </div>
                {prediction[0].map((item, index) => (
                  <>
                    <p className="w-[70%] text-left text-3xl" key={index}><b>{classes[index]}</b>: {Number(item.toFixed(2)) * 100}%</p>
                  </>
                ))}
                <button onClick={() => { setPrediction(null) }}>Try A New Image!</button>
              </div>}
            </div>
          </section>

        </div>


        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>

      </body >
    </html >
  );
}
