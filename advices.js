const advices = [
    // Personal Development
    {
        content: "Invest in continuous learning and personal growth.",
        person: ""
    },
    {
        content: "Practice self-reflection to understand your strengths and weaknesses.",
        person: ""
    },
    {
        content: "Set SMART goals: (Specific, Measurable, Achievable, Relevant, Time-bound)",
        person: ""
    },
    {
        content: "Embrace failure as a learning opportunity.",
        person: ""
    },
    {
        content: "Cultivate a positive mindset and practice gratitude daily.",
        person: ""
    },
    {
        content: "Prioritize self-care to maintain physical, mental, and emotional well-being.",
        person: ""
    },
    {
        content: "Step out of your comfort zone regularly to foster growth.",
        person: ""
    },
    {
        content: "Surround yourself with supportive and positive people.",
        person: ""
    },
    {
        content: "Develop resilience to bounce back from setbacks stronger than before.",
        person: ""
    },
    {
        content: "Take ownership of your actions and choices.",
        person: ""
    },
    // career and success
    {
        content: "Pursue work that aligns with your passions and values.",
        person: ""
    },
    {
        content: "Network and build meaningful relationships in your industry.",
        person: ""
    },
    {
        content: "Be proactive in seeking out opportunities for growth and advancement.",
        person: ""
    },
    {
        content: "Develop strong communication and interpersonal skills.",
        person: ""
    },
    {
        content: "Seek feedback to continuously improve and refine your skills.",
        person: ""
    },
    {
        content: "Take calculated risks to advance your career.",
        person: ""
    },
    {
        content: "Cultivate a strong work ethic and maintain professionalism.",
        person: ""
    },
    {
        content: "Be adaptable and open to change in the workplace.",
        person: ""
    },
    {
        content: "Set boundaries to maintain a healthy work-life balance.",
        person: ""
    },
    {
        content: "Celebrate your achievements and milestones along the way.",
        person: ""
    },
    // Relationships
    {
        content: "Practice active listening to understand others deeply.",
        person: ""
    },
    {
        content: "Communicate openly and honestly in your relationships.",
        person: ""
    },
    {
        content: "Show empathy and compassion towards others.",
        person: ""
    },
    {
        content: "Set boundaries to maintain healthy relationships.",
        person: ""
    },
    {
        content: "Prioritize quality time with loved ones.",
        person: ""
    },
    {
        content: "Practice forgiveness and let go of grudges.",
        person: ""
    },
    {
        content: "Choose your battles wisely in conflicts.",
        person: ""
    },
    {
        content: "Invest in building trust and mutual respect.",
        person: ""
    },
    {
        content: "Express appreciation and affection regularly.",
        person: ""
    },
    {
        content: "Be patient and understanding in your relationships.",
        person: ""
    },
    // Financial well-being
    {
        content: "Create a budget and stick to it to manage your finances effectively.",
        person: ""
    },
    {
        content: "Save and invest for the future regularly.",
        person: ""
    },
    {
        content: "Avoid unnecessary debt and live within your means.",
        person: ""
    },
    {
        content: "Educate yourself about personal finance and investment strategies.",
        person: ""
    },
    {
        content: "Build an emergency fund for unexpected expenses.",
        person: ""
    },
    {
        content: "Diversify your investments to minimize risk.",
        person: ""
    },
    {
        content: "Review your financial goals regularly and adjust as needed.",
        person: ""
    },
    {
        content: "Seek professional advice when making major financial decisions.",
        person: ""
    },
    {
        content: "Practice delayed gratification and avoid impulse spending.",
        person: ""
    },
    {
        content: "Plan for retirement early and consistently contribute to your savings.",
        person: ""
    },
    // Health and Wellness
    {
        content: "Prioritize regular exercise for physical and mental health.",
        person: ""
    },
    {
        content: "Maintain a balanced diet rich in fruits, vegetables, and whole grains.",
        person: ""
    },
    {
        content: "Stay hydrated by drinking plenty of water throughout the day.",
        person: ""
    },
    {
        content: "Get adequate sleep to support overall well-being.",
        person: ""
    },
    {
        content: "Practice stress-management techniques such as meditation or deep breathing exercises.",
        person: ""
    },
    {
        content: "Schedule regular health check-ups and screenings.",
        person: ""
    },
    {
        content: "Limit alcohol consumption and avoid smoking.",
        person: ""
    },
    {
        content: "Find activities that bring you joy and relaxation.",
        person: ""
    },
    {
        content: "Practice mindfulness to stay present in the moment.",
        person: ""
    },
    {
        content: "Seek professional help when dealing with mental health challenges.",
        person: ""
    },
    // Personal Productivity
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    // Communication Skills
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    // Creativity and Innovations
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    // Time Management
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    // Leadership and Influence
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },
    {
        content: "",
        person: ""
    },


    // Add more advices
];

export default advices;