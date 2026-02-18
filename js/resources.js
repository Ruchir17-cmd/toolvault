// ==========================================
// ToolVault Resource Database - Full 45 List
// ==========================================

const resources = [
    // RECONNAISSANCE TOOLS
    {
        id: 1,
        title: "Nmap",
        type: "tool",
        description: "Network exploration tool and security scanner. The industry standard for port scanning and network discovery.",
        url: "https://nmap.org",
        tags: ["reconnaissance", "scanning", "network", "enumeration"],
        keywords: "nmap port scanner network reconnaissance enumeration discovery",
        contributorName: "@RuchirAgarwal",
        contributorLink: "https://ruchir17-cmd.github.io/portfolio/"
    },
    {
        id: 2,
        title: "theHarvester",
        type: "tool",
        description: "OSINT tool for gathering emails, subdomains, hosts, employee names, open ports and banners.",
        url: "https://github.com/laramies/theHarvester",
        tags: ["osint", "reconnaissance", "email", "subdomain"],
        keywords: "theharvester osint email gathering subdomain enumeration",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 3,
        title: "Shodan",
        type: "platform",
        description: "Search engine for Internet-connected devices. Find exposed databases, webcams, and industrial systems.",
        url: "https://www.shodan.io",
        tags: ["osint", "reconnaissance", "iot", "search-engine"],
        keywords: "shodan iot search engine reconnaissance exposed devices",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 4,
        title: "Sublist3r",
        type: "tool",
        description: "Fast subdomain enumeration tool for penetration testers. Uses search engines and APIs.",
        url: "https://github.com/aboul3la/Sublist3r",
        tags: ["reconnaissance", "subdomain", "enumeration"],
        keywords: "sublist3r subdomain enumeration reconnaissance",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // WEB APPLICATION TESTING
    {
        id: 5,
        title: "Burp Suite",
        type: "tool",
        description: "The #1 web application security testing platform. Includes proxy, scanner, intruder, and repeater.",
        url: "https://portswigger.net/burp",
        tags: ["web", "proxy", "scanner", "pentesting"],
        keywords: "burp suite web application security testing proxy scanner",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 6,
        title: "OWASP ZAP",
        type: "tool",
        description: "Free and open-source web application security scanner. Great alternative to Burp Suite.",
        url: "https://www.zaproxy.org",
        tags: ["web", "scanner", "owasp", "free"],
        keywords: "owasp zap web application scanner security free",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 7,
        title: "SQLMap",
        type: "tool",
        description: "Automatic SQL injection and database takeover tool. Supports MySQL, Oracle, PostgreSQL, and more.",
        url: "https://github.com/sqlmapproject/sqlmap",
        tags: ["web", "sql-injection", "exploitation", "database"],
        keywords: "sqlmap sql injection database exploitation automated",
        contributorName: "@RuchirAgarwal",
        contributorLink: "https://your-portfolio-link.com"
    },
    {
        id: 8,
        title: "ffuf",
        type: "tool",
        description: "Fast web fuzzer written in Go. Perfect for directory brute-forcing and parameter discovery.",
        url: "https://github.com/ffuf/ffuf",
        tags: ["web", "fuzzing", "brute-force", "directory"],
        keywords: "ffuf fuzzing web directory brute force parameter discovery",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 9,
        title: "Gobuster",
        type: "tool",
        description: "Directory/File, DNS and VHost busting tool written in Go. Fast and reliable.",
        url: "https://github.com/OJ/gobuster",
        tags: ["web", "brute-force", "directory", "dns"],
        keywords: "gobuster directory brute force dns enumeration vhost",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // EXPLOITATION FRAMEWORKS
    {
        id: 10,
        title: "Metasploit Framework",
        type: "tool",
        description: "The world's most used penetration testing framework. Includes exploits, payloads, and post-exploitation.",
        url: "https://www.metasploit.com",
        tags: ["exploitation", "framework", "post-exploitation"],
        keywords: "metasploit framework exploitation penetration testing payloads",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 11,
        title: "Exploit-DB",
        type: "repo",
        description: "The Exploit Database - CVE compliant archive of public exploits and vulnerable software.",
        url: "https://www.exploit-db.com",
        tags: ["exploits", "cve", "database", "vulnerability"],
        keywords: "exploit-db exploits cve vulnerability database searchsploit",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // PASSWORD CRACKING
    {
        id: 12,
        title: "Hashcat",
        type: "tool",
        description: "World's fastest password recovery tool. Supports 300+ hash types and GPU acceleration.",
        url: "https://hashcat.net/hashcat",
        tags: ["password", "cracking", "hash", "gpu"],
        keywords: "hashcat password cracking hash gpu recovery",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 13,
        title: "John the Ripper",
        type: "tool",
        description: "Fast password cracker available for Unix, Windows, and more. Free and open source.",
        url: "https://www.openwall.com/john",
        tags: ["password", "cracking", "hash"],
        keywords: "john the ripper password cracking hash brute force",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 14,
        title: "Hydra",
        type: "tool",
        description: "Fast network login cracker. Supports protocols including SSH, FTP, HTTP, SMB.",
        url: "https://github.com/vanhauser-thc/thc-hydra",
        tags: ["password", "brute-force", "network", "authentication"],
        keywords: "hydra password brute force network login ssh ftp",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 15,
        title: "SecLists",
        type: "wordlist",
        description: "Collection of lists used during security assessments. Includes passwords, usernames, and URLs.",
        url: "https://github.com/danielmiessler/SecLists",
        tags: ["wordlist", "passwords", "fuzzing", "enumeration"],
        keywords: "seclists wordlist passwords usernames fuzzing enumeration",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 16,
        title: "RockYou Wordlist",
        type: "wordlist",
        description: "Famous password wordlist from the 2009 data breach. Contains 14 million passwords.",
        url: "https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt",
        tags: ["wordlist", "passwords", "cracking"],
        keywords: "rockyou wordlist passwords password cracking",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // PRIVILEGE ESCALATION
    {
        id: 17,
        title: "LinPEAS",
        type: "tool",
        description: "Linux Privilege Escalation Awesome Script. Searches for privilege escalation paths.",
        url: "https://github.com/carlospolop/PEASS-ng/tree/master/linPEAS",
        tags: ["privesc", "linux", "enumeration", "post-exploitation"],
        keywords: "linpeas linux privilege escalation enumeration peass",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 18,
        title: "WinPEAS",
        type: "tool",
        description: "Windows Privilege Escalation Awesome Script. Finds misconfigurations on Windows.",
        url: "https://github.com/carlospolop/PEASS-ng/tree/master/winPEAS",
        tags: ["privesc", "windows", "enumeration", "post-exploitation"],
        keywords: "winpeas windows privilege escalation enumeration peass",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 19,
        title: "GTFOBins",
        type: "cheatsheet",
        description: "List of Unix binaries that can be used to bypass local security restrictions.",
        url: "https://gtfobins.github.io",
        tags: ["privesc", "linux", "bypass", "reference"],
        keywords: "gtfobins linux privilege escalation bypass sudo binaries",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // ACTIVE DIRECTORY
    {
        id: 20,
        title: "BloodHound",
        type: "tool",
        description: "Uses graph theory to reveal hidden relationships in Active Directory.",
        url: "https://github.com/BloodHoundAD/BloodHound",
        tags: ["active-directory", "enumeration", "windows", "graph"],
        keywords: "bloodhound active directory ad enumeration graph windows",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 21,
        title: "Mimikatz",
        type: "tool",
        description: "Extract passwords, hashes, and kerberos tickets from memory on Windows.",
        url: "https://github.com/gentilkiwi/mimikatz",
        tags: ["active-directory", "windows", "credentials", "post-exploitation"],
        keywords: "mimikatz windows credentials password memory kerberos",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 22,
        title: "Impacket",
        type: "repo",
        description: "Collection of Python classes for working with network protocols. Essential for AD pentesting.",
        url: "https://github.com/fortra/impacket",
        tags: ["active-directory", "windows", "python", "network"],
        keywords: "impacket python active directory windows network protocols",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 23,
        title: "Rubeus",
        type: "tool",
        description: "C# toolset for raw Kerberos interaction and abuses. Kerberoasting and AS-REP roasting.",
        url: "https://github.com/GhostPack/Rubeus",
        tags: ["active-directory", "kerberos", "windows", "exploitation"],
        keywords: "rubeus kerberos kerberoasting active directory windows",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // CHEAT SHEETS & GUIDES
    {
        id: 24,
        title: "HackTricks",
        type: "guide",
        description: "Complete hacking methodology and cheat sheets. Covers everything from recon to privesc.",
        url: "https://book.hacktricks.xyz",
        tags: ["cheatsheet", "guide", "methodology", "reference"],
        keywords: "hacktricks cheatsheet guide methodology pentesting reference",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 25,
        title: "PayloadsAllTheThings",
        type: "repo",
        description: "List of useful payloads and bypasses for Web App Security. SQLi, XSS, XXE.",
        url: "https://github.com/swisskyrepo/PayloadsAllTheThings",
        tags: ["cheatsheet", "payloads", "web", "bypass"],
        keywords: "payloadsallthethings payloads web bypass sql xss xxe",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 26,
        title: "Reverse Shell Cheat Sheet",
        type: "cheatsheet",
        description: "Comprehensive list of reverse shell one-liners for various languages.",
        url: "https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md",
        tags: ["cheatsheet", "reverse-shell", "post-exploitation"],
        keywords: "reverse shell cheatsheet bash python php netcat",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 27,
        title: "LOLBAS",
        type: "cheatsheet",
        description: "Living Off The Land Binaries and Scripts for Windows. Native binaries for post-exploitation.",
        url: "https://lolbas-project.github.io",
        tags: ["windows", "bypass", "privesc", "reference"],
        keywords: "lolbas windows living off the land binaries bypass",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // LEARNING PLATFORMS
    {
        id: 28,
        title: "HackTheBox",
        type: "platform",
        description: "Online cybersecurity training platform with retired and active vulnerable machines.",
        url: "https://www.hackthebox.com",
        tags: ["practice", "ctf", "lab", "learning"],
        keywords: "hackthebox htb practice ctf vulnerable machines learning",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 29,
        title: "TryHackMe",
        type: "platform",
        description: "Guided cybersecurity learning platform with hands-on exercises and paths.",
        url: "https://tryhackme.com",
        tags: ["practice", "learning", "lab", "guided"],
        keywords: "tryhackme thm practice learning guided cybersecurity",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 30,
        title: "Web Security Academy",
        type: "platform",
        description: "Free online web security training from PortSwigger. Interactive labs.",
        url: "https://portswigger.net/web-security",
        tags: ["learning", "web", "free", "lab"],
        keywords: "portswigger web security academy free learning burp",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 31,
        title: "VulnHub",
        type: "platform",
        description: "Free vulnerable VMs for hands-on penetration testing practice.",
        url: "https://www.vulnhub.com",
        tags: ["practice", "vm", "lab", "free"],
        keywords: "vulnhub vulnerable machines vm practice download",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // CVE DATABASES
    {
        id: 32,
        title: "CVE Details",
        type: "cve",
        description: "Free CVE security vulnerability database with statistics.",
        url: "https://www.cvedetails.com",
        tags: ["cve", "vulnerability", "database", "research"],
        keywords: "cve details vulnerability database search research",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 33,
        title: "NVD (NIST)",
        type: "cve",
        description: "US government repository of standards-based vulnerability management data.",
        url: "https://nvd.nist.gov",
        tags: ["cve", "vulnerability", "database", "government"],
        keywords: "nvd national vulnerability database cve nist government",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // BUG BOUNTY
    {
        id: 34,
        title: "HackerOne",
        type: "platform",
        description: "The #1 bug bounty platform. Find vulnerabilities, earn rewards.",
        url: "https://www.hackerone.com",
        tags: ["bug-bounty", "platform", "vulnerabilities"],
        keywords: "hackerone bug bounty platform vulnerabilities rewards",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 35,
        title: "Bugcrowd",
        type: "platform",
        description: "Crowdsourced cybersecurity platform with bug bounty programs.",
        url: "https://www.bugcrowd.com",
        tags: ["bug-bounty", "platform", "crowdsourced"],
        keywords: "bugcrowd bug bounty platform crowdsourced security",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // MOBILE & REVERSE
    {
        id: 36,
        title: "MobSF",
        type: "tool",
        description: "Mobile Security Framework - Automated mobile app security testing for Android/iOS.",
        url: "https://github.com/MobSF/Mobile-Security-Framework-MobSF",
        tags: ["mobile", "android", "ios", "scanner"],
        keywords: "mobsf mobile security framework android ios automated",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 37,
        title: "Frida",
        type: "tool",
        description: "Dynamic instrumentation toolkit for developers and reverse-engineers.",
        url: "https://frida.re",
        tags: ["mobile", "reverse-engineering", "dynamic-analysis"],
        keywords: "frida mobile reverse engineering dynamic analysis instrumentation",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 38,
        title: "Ghidra",
        type: "tool",
        description: "NSA's free software reverse engineering framework. Decompile and analyze binaries.",
        url: "https://ghidra-sre.org",
        tags: ["reverse-engineering", "decompiler", "nsa", "free"],
        keywords: "ghidra reverse engineering decompiler nsa binary analysis",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 39,
        title: "radare2",
        type: "tool",
        description: "Unix-like reverse engineering framework. Disassembler and debugger.",
        url: "https://rada.re",
        tags: ["reverse-engineering", "disassembler", "debugger"],
        keywords: "radare2 reverse engineering disassembler debugger binary",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // CLOUD SECURITY
    {
        id: 40,
        title: "ScoutSuite",
        type: "tool",
        description: "Multi-cloud security auditing tool for AWS, Azure, and GCP.",
        url: "https://github.com/nccgroup/ScoutSuite",
        tags: ["cloud", "aws", "azure", "gcp", "audit"],
        keywords: "scoutsuite cloud security aws azure gcp audit",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 41,
        title: "Pacu",
        type: "tool",
        description: "Open source AWS exploitation framework for offensive security testing.",
        url: "https://github.com/RhinoSecurityLabs/pacu",
        tags: ["cloud", "aws", "exploitation", "pentesting"],
        keywords: "pacu aws cloud exploitation framework pentesting",
        contributorName: "@Community",
        contributorLink: "#"
    },

    // NETWORK & OSINT
    {
        id: 42,
        title: "Wireshark",
        type: "tool",
        description: "The world's most popular network protocol analyzer. Packet capture.",
        url: "https://www.wireshark.org",
        tags: ["network", "packet-analysis", "monitoring"],
        keywords: "wireshark network packet analysis traffic monitoring",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 43,
        title: "Maltego",
        type: "tool",
        description: "Interactive data mining tool that renders graphs for link analysis.",
        url: "https://www.maltego.com",
        tags: ["osint", "reconnaissance", "graph", "data-mining"],
        keywords: "maltego osint reconnaissance data mining graph analysis",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 44,
        title: "SpiderFoot",
        type: "tool",
        description: "Automated OSINT collection tool integrating 100+ data sources.",
        url: "https://www.spiderfoot.net",
        tags: ["osint", "reconnaissance", "automated", "intelligence"],
        keywords: "spiderfoot osint automated intelligence gathering reconnaissance",
        contributorName: "@Community",
        contributorLink: "#"
    },
    {
        id: 45,
        title: "CVE Checker",
        type: "tool",
        description: "Python-based CVE checker that uses the NIST NVD API to find vulnerabilities.",
        url: "#",
        tags: ["cve", "python", "automation", "research"],
        keywords: "cve checker python nist nvd api automation",
        contributorName: "@RuchirAgarwal",
        contributorLink: "https://your-portfolio-link.com"
    }
];