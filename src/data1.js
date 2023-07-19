const dataone = [
    {
        id: 1,
        question: "Which of the following is an example of a side-channel attack that can be used to steal cryptographic keys from a computer system?",
        answer: [
            {
                text: "Denial-of-Service (DoS) attack",
                correct: false
            },
            {
                text: "Brute-force attack",
                correct: false
            },
            {
                text: " Timing attack",
                correct: true
            },
            {
                text: " Cross-site scripting (XSS) attack",
                correct: false
            },
        ]
    },
    {
        id: 2,
        question: "Which of the following is an example of a covert channel that can be used to exfiltrate data from a computer system without detection?",
        answer: [
            {
                text: "TCP/IP protocol",
                correct: false
            },
            {
                text: "HTTP protocol",
                correct: false
            },
            {
                text: "DNS protocol",
                correct: true
            },
            {
                text: "FTP protocol",
                correct: false
            },
        ]
    },
    {
        id: 3,
        question: "Which of the following is an example of a buffer overflow vulnerability that can be exploited to execute arbitrary code on a computer system?",
        answer: [
            {
                text: "SQL injection vulnerability",
                correct: false
            },
            {
                text: "Cross-site scripting (XSS) vulnerability",
                correct: false
            },
            {
                text: "Heap overflow vulnerability",
                correct: true
            },
            {
                text: "Remote code execution vulnerability",
                correct: false
            },
        ]
    },
    {
        id: 4,
        question: "Which of the following is an example of a social engineering technique that can be used to trick users into divulging sensitive information?",
        answer: [
            {
                text: "Shoulder surfing",
                correct: false
            },
            {
                text: "Spear phishing",
                correct: true
            },
            {
                text: "Smishing",
                correct: false
            },
            {
                text: "Watering hole attack",
                correct: false
            },
        ]
    },
    {
        id: 5,
        question: "Which of the following is an example of a cryptographic algorithm that is vulnerable to a birthday attack?",
        answer: [
            {
                text: "SHA-256",
                correct: false
            },
            {
                text: "RSA",
                correct: false
            },
            {
                text: "AES",
                correct: false
            },
            {
                text: "MD5",
                correct: true
            },
        ]
    },
    {
        id: 6,
        question: "Which of the following is an example of a network security device that can be used to inspect and filter traffic between network segments?",
        answer: [
            {
                text: "Firewall",
                correct: true
            },
            {
                text: "Intrusion detection system (IDS)",
                correct: false
            },
            {
                text: "Virtual private network (VPN)",
                correct: false
            },
            {
                text: "Load balancer",
                correct: false
            },
        ]
    },
    {
        id: 7,
        question: "Which of the following is an example of a software vulnerability that can be exploited to escalate privileges on a computer system?",
        answer: [
            {
                text: "Denial-of-Service (DoS) vulnerability",
                correct: false
            },
            {
                text: "Integer overflow vulnerability",
                correct: true
            },
            {
                text: "Race condition vulnerability",
                correct: false
            },
            {
                text: "SQL injection vulnerability",
                correct: false
            },
        ]
    },
    {
        id: 8,
        question: "Which of the following is an example of a cyberattack that uses multiple compromised computers to attack a target?",
        answer: [
            {
                text: "Denial-of-Service (DoS) attack",
                correct: false
            },
            {
                text: "iMan-in-the-middle (MitM) attack",
                correct: false
            },
            {
                text: " Distributed denial-of-service (DDoS) attack",
                correct: true
            },
            {
                text: "SQL injection attack",
                correct: false
            },
        ]
    },
    {
        id: 9,
        question: "What is the name of the algorithm used to generate random numbers in the Linux operating system?",
        answer: [
            {
                text: "MD5",
                correct: false
            },
            {
                text: " SHA-1",
                correct: false
            },
            {
                text: " SHA-2",
                correct: false
            },
            {
                text: "/dev/random",
                correct: true
            },
        ]
    },
    {
        id: 10,
        question: "What is the name of the technique used by hackers to bypass firewalls and gain unauthorized access to a network by sending packets that appear to be from a trusted IP address?",
        answer: [
            {
                text: "DDoS",
                correct: false
            },
            {
                text: "ARP spoofing",
                correct: true
            },
            {
                text: " SQL injection",
                correct: false
            },
            {
                text: "Phishing",
                correct: false
            },
        ]
    },
    {
        id: 11,
        question: "What is the name of the vulnerability that allows attackers to read sensitive information from a computer's memory, such as passwords or encryption keys?",
        answer: [
            {
                text: "SQL injection",
                correct: false
            },
            {
                text: "Cross-site scripting",
                correct: false
            },
            {
                text: "Buffer overflow",
                correct: false
            },
            {
                text: "Meltdown/Spectre",
                correct: true
            },
        ]
    },
    {
        id: 12,
        question: "Which of the following is a protocol that provides secure communication over the internet by encrypting data before it is transmitted?",
        answer: [
            {
                text: "SSL",
                correct: true
            },
            {
                text: "HTTP",
                correct: false
            },
            {
                text: "FTP",
                correct: false
            },
            {
                text: "ASMTP",
                correct: false
            },
        ]
    },
    {
        id: 13,
        question: "What is the name of the vulnerability that allows attackers to execute arbitrary code on a target system by exploiting a flaw in a software program?",
        answer: [
            {
                text: "XSS",
                correct: false
            },
            {
                text: "CSRF",
                correct: false
            },
            {
                text: "Buffer overflow",
                correct: true
            },
            {
                text: "SQL injection",
                correct: false
            },
        ]
    },
    {
        id: 14,
        question: "What is the name of the protocol used to encrypt email messages and attachments to ensure privacy and security?",
        answer: [
            {
                text: "SSL",
                correct: false
            },
            {
                text: "SSH",
                correct: false
            },
            {
                text: "S/MIME",
                correct: false
            },
            {
                text: "PGP",
                correct: true
            },
        ]
    },
    {
        id: 15,
        question: "Which of the following is a type of malware that can steal a victim's sensitive information, such as login credentials or credit card numbers?",
        answer: [
            {
                text: " Trojan",
                correct: false
            },
            {
                text: " Ransomware",
                correct: false
            },
            {
                text: "Rootkit",
                correct: false
            },
            {
                text: " Spyware",
                correct: true
            },
        ]
    },

]

export default dataone;