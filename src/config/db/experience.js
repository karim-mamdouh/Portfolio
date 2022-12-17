let idCount = 0;
//Experience factory function
const experienceGenerator = (date, title, company, details) => ({
  id: idCount++,
  date,
  title,
  company,
  details,
});
//Array of experience and education
export const experience = {
  work: [
    experienceGenerator(
      "Nov. 2022 - Present",
      "Frontend Developer",
      "Eshtri Aqar",
      []
    ),
    experienceGenerator(
      "Nov. 2021 - Apr. 2022",
      "Development of Fan Testing System",
      "Freelance",
      [
        "Devloped and designed full control system for testing commercial/residential fans, the system aquire readings from sensors & evaluate based on IEC60879 standard",
        "Technology: Arduino (GRBL firmware), MS SQL Server, .NET framework",
        "Features: Test report, Database logging, Serial/ModBus interface and Printing",
      ]
    ),
    experienceGenerator(
      "Nov. 2017 - May 2019",
      "Continuous Improvement Engineer",
      "HETRONIC Division of Methode Electronics L.T.D.",
      [
        "Responsible for improving & easing testing process by upgrading testing to semi-automated",
        "Achivements:",
        "- Creating semi-automated testing JIGs for 50% of harnesses produced (Software Controlled)",
        "- Eliminated wrong transmitter channel customer complaint by relying testing on item QR code",
      ]
    ),
    experienceGenerator(
      "Nov. 2017 - May 2019",
      "Electronics Repair Engineer",
      "HETRONIC Division of Methode Electronics L.T.D.",
      [
        "Participated in reducing incoming rejected boards by 50% by:",
        "- Properly teaching operators how to use equipement correctly",
        "- Improving testing JIGs/Fixtures to be easier to use and maintainable",
        "- Communicating with suppliers to ensure no skip points occur at their ends",
      ]
    ),
  ],
  education: [
    experienceGenerator(
      "Apr. 2022 - Sep. 2022",
      "Front-End & Cross-Platform Intensive Code Camp",
      "Information Technology Institute"
    ),
    experienceGenerator(
      "Sep. 2012 - Sep. 2017",
      "B.Sc. in Electrical & Electronics Engineering",
      "Higher Technological Institute (10th of Ramadan)",
      [
        "General Grade: Very Good (3.03 GPA)",
        "Project Grade: Excellent",
        "Graduation Project: Automatic Receiver Testing JIG for Hetronic MFS family",
      ]
    ),
  ],
};
