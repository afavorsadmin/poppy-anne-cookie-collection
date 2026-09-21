import Link from "next/link";

const services = [
  ["Custom Cookies", "/custom-cookies", "Cookie collections designed around your colors, names, theme, and event."],
  ["Wedding Cookies", "/wedding-cookies", "Elegant handmade favors and dessert-table cookies for wedding celebrations."],
  ["Birthday Cookies", "/birthday-cookies", "Personalized birthday designs for every age, interest, and milestone."],
];

export default function Home() {
  return <>
    <div className="migration">Vercel migration preview — ordering remains on the current live website during testing.</div>
    <div className="notice">✨ Cottage Food Licensed, LLC • Local Glenpool, Oklahoma Pickup & Regional Shipping Available</div>
    <header className="header">
      <Link className="brand" href="/">The Poppy-Anne Cookie Collection</Link>
      <nav className="nav"><a href="#shop">Shop</a><a href="#featured">Featured</a><a href="#about">About</a><a href="https://thepoppyannecookiecollection.com/?page=client">Profile</a></nav>
    </header>
    <main>
      <section className="hero"><div><h1>Handcrafted Custom Sugar Cookies</h1><p>Custom designs that bring joy, color, and a dash of elegance to celebrations in Glenpool, Oklahoma.</p><a className="button light" href="https://thepoppyannecookiecollection.com/?page=shop">Visit the Live Shop</a></div></section>
      <section className="section" id="shop"><h2 className="section-title">Cookies for Every Celebration</h2><p className="section-lead">Explore custom decorated sugar cookies for celebrations, thoughtful gifts, and special events.</p><div className="grid">{services.map(([name,url,text])=><article className="card" key={url}><h3>{name}</h3><p>{text}</p><Link className="button" href={url}>Explore</Link></article>)}</div></section>
      <section className="section" id="featured"><h2 className="section-title">Featured Collections</h2><p className="section-lead">Birthday, wedding, shower, holiday, business, and special-event collections made with artistic care.</p><div className="grid"><article className="card"><h3>Baby Showers</h3><p>Sweet personalized details for welcoming a new arrival.</p><Link href="/baby-shower-cookies">View ideas</Link></article><article className="card"><h3>Gift Sets</h3><p>Coordinated treats for appreciation, milestones, and holidays.</p><Link href="/cookie-gift-sets">View ideas</Link></article><article className="card"><h3>Business Events</h3><p>Memorable client, employee, and company celebration cookies.</p><Link href="/corporate-business-cookies">View ideas</Link></article></div></section>
      <section className="section about" id="about"><img src="https://i.imgur.com/mPrFOO5.jpeg" alt="Poppy Anne in her Glenpool cookie studio"/><div><h2 className="section-title" style={{textAlign:"left"}}>Meet Poppy</h2><p>Poppy combines an artistic background with years of laboratory precision. Every decorated cookie reflects creativity, careful preparation, and a dedication to excellence.</p><a className="button" href="https://thepoppyannecookiecollection.com/?page=about">Read Poppy&apos;s Story</a></div></section>
    </main>
    <footer className="footer"><strong>The Poppy-Anne Cookie Collection LLC</strong><p>Glenpool, Oklahoma • Text: (918) 520-4787</p><div className="footer-links"><Link href="/custom-cookies">Custom Cookies</Link><Link href="/custom-cookie-orders">How to Order</Link><a href="https://thepoppyannecookiecollection.com/?page=policy">Important Information</a></div></footer>
  </>;
}
