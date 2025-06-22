import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ResumePage() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="p-4 md:p-10 max-w-5xl mx-auto space-y-10"
    >
      <motion.header className="text-center space-y-2" variants={fadeInUp}>
        <h1 className="text-4xl font-bold">Ravipati Sai Harsha Vardhan</h1>
        <p className="text-muted-foreground">
          Backend Developer | System Design Enthusiast | Competitive Programmer
        </p>
        <div className="flex justify-center space-x-4 pt-2">
          <a href="mailto:harshavardhan281905@gmail.com">📧 Email</a>
          <a href="https://www.linkedin.com/in/harsha-vardhan-b9b868205" target="_blank">🔗 LinkedIn</a>
          <a href="https://github.com/harsha960" target="_blank">🐱 GitHub</a>
        </div>
      </motion.header>

      {["Education", "Technical Skills", "Experience", "Projects", "Achievements"].map((section, index) => (
        <motion.div
          key={section}
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          {section === "Education" && (
            <Card>
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">Education</h2>
                <p className="text-lg">B.Tech, Electrical Engineering – NIT Rourkela (May 2024)</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.0/10.0</p>
              </CardContent>
            </Card>
          )}
          {section === "Technical Skills" && (
            <Card>
              <CardContent className="p-6 space-y-3">
                <h2 className="text-2xl font-semibold">Technical Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "C/C++", "Swift", "SQL", "Golang", "Spring Boot", "Kafka", "MongoDB", "MySQL", "Git", "CI/CD", "System Design"].map(skill => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          {section === "Experience" && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Experience</h2>
                <div>
                  <h3 className="font-medium">Disney+ Hotstar (Backend Developer)</h3>
                  <p className="text-sm text-muted-foreground">Jun 2024 – Present</p>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Boosted TPS from 2 to 120 per pod (60x scale-up)</li>
                    <li>Replaced Python scripts with SQS-based refund automation</li>
                    <li>Refactored APIs, removed cache layers, improved latency by 40%</li>
                    <li>Enhanced tracing logs and debugging with cohort mocking</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Disney+ Hotstar (Software Intern)</h3>
                  <p className="text-sm text-muted-foreground">Jan 2024 – Jun 2024</p>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Analyzed 1M+ videos using ResNet-50 for fingerprinting</li>
                    <li>Achieved 92.83% accuracy with a CNN-based model</li>
                    <li>Indexed video similarity in Elasticsearch</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
          {section === "Projects" && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Projects</h2>
                <div>
                  <h3 className="font-medium">CookBox – Hack Odisa @ NITR</h3>
                  <ul className="list-disc ml-5 text-sm">
                    <li>Recipe platform using ingredient-based suggestions</li>
                    <li>Integrated Google APIs, Razorpay, and video calls</li>
                    <li>Managed dual workflows for clients and delivery riders</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}
          {section === "Achievements" && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Achievements</h2>
                <ul className="list-disc ml-5 text-sm">
                  <li>31st globally, 10th in India – Leetcode Biweekly Contest 118</li>
                  <li>ICPC Kanpur Regionals AIR 23</li>
                  <li>Codeforces Expert (Rating: 1839)</li>
                  <li>Google Kickstart Rank 32</li>
                  <li>IMO Finalist (Rank 8, 2014)</li>
                  <li>4-Star CodeChef (Rating: 1894)</li>
                </ul>
              </CardContent>
            </Card>
          )}
        </motion.div>
      ))}

      <motion.footer
        className="text-center text-muted-foreground py-8"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        &copy; 2025 Harsha Vardhan | <a className="underline" href="https://drive.google.com/file/d/1Y_0uTY66N-uENL0jUxk6DIcgV9Pb_cup/view">Download Resume</a>
      </motion.footer>
    </motion.div>
  );
}
