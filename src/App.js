import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  
  return (
    <main className={`app ${darkMode ? "dark" : "light"} ${animate ? "fade-in" : ""}`}>
      {/* Dark Mode Toggle */}
      <div className="toggle-container">
        <Button onClick={() => setDarkMode(!darkMode)} className="mode-toggle">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Hi, I'm Shreya Khurana</h1>
        <p>
          Frontend Developer passionate about building interactive, accessible, and modern web applications using React, Tailwind, and modern JavaScript.
        </p>
        <div className="button-group">
  <Button asChild><a href="#projects">View Projects</a></Button>
</div>
      </section>

            {/* About Section */}
      <section className="section">
        <h2>About Me</h2>
        <p>
          Aspiring software engineer with hands-on experience in full-stack and AI-driven development, including GenAI tools and automation platforms. Skilled in building production-ready web apps, chatbot interfaces, and NLP-based tools using modern tech stacks. Currently contributing to medical software lifecycle compliance at Sunfox Technologies. Eager to contribute to scalable systems in collaborative, fast-paced environments.
        </p>
      </section>

      {/* Internship Section */}
      <section className="section alt-section">
        <h2>Internship</h2>
        <Card>
          <CardContent>
            <h3>Software Compliance Intern – Sunfox Technologies</h3>
            <p>Jun 2025 – Present</p>
            <ul>
              <li>Collaborated with engineering teams to align software development with ISO 62304 standards using Git workflows.</li>
              <li>Developed internal tools for traceability matrix automation, lifecycle tracking, and compliance reporting.</li>
              <li>Assisted in Jira integration for requirement mapping, risk verification, and audit readiness.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section alt-section">
        <h2>Projects</h2>
        <div className="grid">
          <Card><CardContent>
            <h3>Health Connect Pro</h3>
            <p>Full stack healthcare app with role-based access, symptom checker, and appointment booking.</p>
            <p className="tech-stack">React.js • Flask • MongoDB • Tailwind</p>
          </CardContent></Card>

          <Card><CardContent>
            <h3>Gemini Clone</h3>
            <p>Responsive Gemini-like chatbot UI using Gemini API and React with Tailwind.</p>
            <p className="tech-stack">React.js • Gemini API • Tailwind</p>
          </CardContent></Card>

          <Card><CardContent>
            <h3>MCQ Generator</h3>
            <p>NLP tool that generates 200+ MCQs from PDFs in under 10s using GenAI.</p>
            <p className="tech-stack">Python • Streamlit • spaCy • NLTK</p>
          </CardContent></Card>

          <Card><CardContent>
            <h3>Attendance Automation</h3>
            <p>Face detection system with 93% accuracy for automated student attendance.</p>
            <p className="tech-stack">Python • OpenCV • NumPy</p>
          </CardContent></Card>

          <Card><CardContent>
            <h3>Sentiment Analysis for Mental Health</h3>
            <p>Web-based tool analyzing 100K Reddit comments using asyncpraw and VADER sentiment analysis.</p>
            <p className="tech-stack">Python • Asyncpraw • VADER • NLTK • Google Colab</p>
          </CardContent></Card>

          <Card><CardContent>
            <h3>Medical Chatbot for Symptom Analysis</h3>
            <p>Built an intuitive JavaScript-based chatbot that dynamically generates health advice based on user inputs.</p>
            <p className="tech-stack">JavaScript • HTML • CSS</p>
          </CardContent></Card>

          <Card><CardContent>
            <h3>Toxic Content Analysis on Social Media</h3>
            <p>BERT-based NLP model classifying toxic comments from Kaggle dataset. Achieved high F1-score and deployed using Flask.</p>
            <p className="tech-stack">Python • BERT • Flask • Kaggle</p>
          </CardContent></Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2>Skills</h2>
        <ul className="skills">
          <li>HTML5</li><li>CSS3</li><li>JavaScript</li><li>React.js</li>
          <li>Tailwind CSS</li><li>Python</li><li>Flask</li><li>OpenCV</li>
          <li>MongoDB</li><li>MySQL</li><li>Git</li><li>Streamlit</li>
          <li>NLTK</li><li>VADER</li><li>BERT</li><li>Google Colab</li>
          <li>Asyncpraw</li><li>Natural Language Processing</li>
          <li>Data Structures & Algorithms (DSA)</li>
          <li>Node.js</li><li>Jupyter Notebook</li><li>REST APIs</li>
          <li>Agile & Scrum</li><li>Version Control (Git/GitHub)</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="section alt-section contact">
        <h2>Contact</h2>
        <p>Let's connect and build something amazing!</p>
        <div className="icons">
          <a href="mailto:shreyakhurana1012@gmail.com"><Mail /></a>
          <a href="https://github.com/shreyakhuranaa" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://linkedin.com/in/shreya-khurana-97895b24b" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
      </section>
    </main>
  );
}
