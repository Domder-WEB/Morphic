```css
/* ===========================
   MORFAKE - styles.css
   Modern Glass UI
=========================== */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:"Inter",sans-serif;
    background:
        radial-gradient(circle at top left,#155e75 0%,transparent 35%),
        radial-gradient(circle at bottom right,#312e81 0%,transparent 35%),
        #09090b;
    color:#ffffff;
    min-height:100vh;
}

/* Scrollbar */

::-webkit-scrollbar{
    width:8px;
}

::-webkit-scrollbar-track{
    background:#111827;
}

::-webkit-scrollbar-thumb{
    background:#374151;
    border-radius:20px;
}

::-webkit-scrollbar-thumb:hover{
    background:#4b5563;
}

/* Header */

header{
    backdrop-filter:blur(18px);
    background:rgba(10,10,15,.82);
    border-bottom:1px solid rgba(255,255,255,.08);
}

/* Logo */

.logo{
    font-size:32px;
    font-weight:900;
    letter-spacing:2px;
    background:linear-gradient(90deg,#22d3ee,#3b82f6,#8b5cf6);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
}

/* Navigation */

nav{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
}

nav button{
    border:none;
    cursor:pointer;
    padding:12px 20px;
    border-radius:14px;
    background:#18181b;
    color:#d4d4d8;
    font-weight:700;
    transition:.25s;
}

nav button:hover{
    transform:translateY(-2px);
    background:#22d3ee;
    color:#000;
    box-shadow:0 0 25px rgba(34,211,238,.35);
}

/* Tabs */

.tab{
    animation:fade .35s ease;
}

@keyframes fade{

    from{
        opacity:0;
        transform:translateY(15px);
    }

    to{
        opacity:1;
        transform:none;
    }

}

/* Hero */

.hero{
    background:
        linear-gradient(
            135deg,
            rgba(34,211,238,.18),
            rgba(59,130,246,.18),
            rgba(139,92,246,.18)
        );

    border:1px solid rgba(255,255,255,.08);

    backdrop-filter:blur(25px);

    border-radius:32px;

    padding:60px;
}

.hero h1{
    font-size:64px;
    font-weight:900;
}

.hero p{
    color:#d4d4d8;
    margin-top:18px;
    line-height:1.7;
    max-width:700px;
}

/* Buttons */

.btn{
    padding:14px 24px;
    border-radius:14px;
    font-weight:800;
    cursor:pointer;
    transition:.25s;
}

.btn-primary{
    background:#22d3ee;
    color:black;
    border:none;
}

.btn-primary:hover{
    transform:scale(1.04);
}

.btn-secondary{
    background:transparent;
    color:white;
    border:1px solid #3f3f46;
}

.btn-secondary:hover{
    background:#18181b;
}

/* Cards */

.card{
    background:rgba(24,24,27,.72);
    backdrop-filter:blur(20px);
    border:1px solid rgba(255,255,255,.06);
    border-radius:24px;
    padding:24px;
    transition:.25s;
}

.card:hover{
    transform:translateY(-4px);
    border-color:#22d3ee;
    box-shadow:0 0 35px rgba(34,211,238,.15);
}

/* Stats */

.stat-number{
    font-size:42px;
    font-weight:900;
}

.stat-label{
    color:#9ca3af;
    margin-bottom:10px;
}

/* Upload */

.upload-box{
    border:2px dashed #3f3f46;
    border-radius:24px;
    padding:80px 20px;
    text-align:center;
    transition:.25s;
}

.upload-box:hover{
    border-color:#22d3ee;
    background:rgba(34,211,238,.05);
}

/* Task */

.task{
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#18181b;
    padding:18px;
    border-radius:18px;
    transition:.2s;
}

.task:hover{
    transform:translateX(5px);
}

/* Profile */

.avatar{
    width:110px;
    height:110px;
    border-radius:50%;
    background:linear-gradient(135deg,#22d3ee,#8b5cf6);
    box-shadow:0 0 30px rgba(34,211,238,.3);
}

/* Footer */

footer{
    margin-top:80px;
    padding:40px;
    text-align:center;
    color:#71717a;
}

/* Mobile */

@media(max-width:768px){

    .hero{
        padding:30px;
    }

    .hero h1{
        font-size:42px;
    }

    nav{
        justify-content:center;
    }

    nav button{
        width:100%;
    }

}
```
