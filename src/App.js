import React from 'react';
import './App.css'; 
import img1 from './kad3.jpg';
import img2 from './pan2.jpg';
import img3 from './kateel3.jpg';
import img4 from './mangal3.jpg';
import img5 from './aloy1.jpg';
import img6 from './pil2.jpg';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Navbar component with header
const Navbar = () => (
  <header>
    <h1>Namma Kudla</h1>
    <h3>Explore tulunadu through our blogs</h3>
    <nav className="navbar">
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/gallery">Blogs</Link></li>
      </ul>
    </nav>
  </header>
);


// Home component with enhanced features
const Home = () => (
  <div className="container">
    <Navbar />
    <p>
    Mangaluru, also known as Mangalore, is a picturesque coastal city located in the state of Karnataka, India.
Situated between the Western Ghats and the Arabian Sea, Mangaluru boasts a unique blend of natural beauty, rich culture, and historical significance.
    </p>
    <p>
      <ul>
    <li>Key Attractions:</li>
<ul>
<li>Beaches: Mangaluru is renowned for its pristine beaches such as Panambur Beach, Tannirbhavi Beach, and Surathkal Beach, offering stunning sunsets and opportunities for water sports.</li>
<li>Temples: Explore ancient temples like Kadri Manjunath Temple, Mangaladevi Temple, and Kudroli Gokarnath Temple, reflecting the city's spiritual heritage.</li>
<li>Markets: Wander through bustling markets like Hampankatta and Central Market, where you can shop for traditional artifacts, spices, and local delicacies.</li>
<li>Historical Sites: Visit historical landmarks such as Sultan Battery, St. Aloysius Chapel, and the Old Mangalore Port, showcasing the city's colonial past.</li>
</ul>
<li>Cuisine:</li>

<p>Indulge in Mangaluru's diverse culinary delights, influenced by its coastal location and cultural heritage.
Sample authentic dishes like Mangalorean fish curry, Neer Dosa, Goli Baje, and Kori Rotti, known for their unique flavors and spices.
Don't miss out on enjoying a cup of filter coffee, a beloved beverage in Mangaluru, at local cafes and eateries.
</p>
<li>Events and Festivals:</li>

<p>Experience the vibrant culture of Mangaluru by participating in festivals like Mangaluru Dasara, Kadri Kambla, and Karavali Utsav, showcasing traditional music, dance, and rituals.
Attend cultural events, art exhibitions, and music concerts held throughout the year, offering insights into the city's artistic and creative community.</p>
<li>Outdoor Activities:</li>

<p>Embark on outdoor adventures such as trekking in the Western Ghats, exploring wildlife sanctuaries like Pilikula Nisargadhama, and boating in the backwaters of Netravathi and Gurupura rivers.</p>
<li>Local Tips and Recommendations:</li>

<p>Provide insider tips and recommendations, including transportation options, accommodation suggestions, and safety precautions for travelers visiting Mangaluru.
Highlight lesser-known attractions, hidden gems, and off-the-beaten-path experiences that travelers can explore to immerse themselves fully in the local culture and lifestyle.Key Attractions:
</p>

</ul>
    </p>
  </div>
);

const About = () => (
  <div className="container about-container">
    <h1>About Us</h1>
    
    <h2>Discover the Coastal Gem of Karnataka</h2>
    <br/>
    <br/>
    <p>
Nestled along the pristine shores of Karnataka, Mangaluru, affectionately known as Mangalore, beckons with its rich cultural heritage, scenic landscapes, and culinary delights. Situated on the Arabian Sea coast, this vibrant city captivates travelers with its blend of tradition and modernity.
<br/>
<br/>
<h3>Our Mission:</h3>
At Explore Mangaluru, our mission is to unravel the treasures of this coastal paradise and share the magic of Mangaluru with the world. We are passionate about showcasing the authentic essence of Mangaluru through immersive travel experiences, insightful guides, and captivating stories.
<br/>
<br/>
<h3>Meet the Founders:</h3>
Founded by a team of avid travelers with a deep-rooted connection to Mangaluru, Explore Mangaluru is a labor of love fueled by our wanderlust and admiration for this enchanting city. Our journey began with a shared desire to showcase the hidden gems and unique charm of Mangaluru, inviting fellow travelers to embark on unforgettable adventures with us.
<br/>
<br/>
<h3>Our Focus:</h3>
At Explore Mangaluru, we focus on curating comprehensive travel guides, insider tips, and captivating narratives that inspire exploration and foster a deeper connection with Mangaluru. From exploring ancient temples and pristine beaches to savoring the flavors of local cuisine and experiencing cultural festivities, we aim to provide an authentic and enriching travel experience.
<br/>
<br/>
<h3>Engage with Us:</h3>
Join our vibrant travel community and embark on a journey of discovery with Explore Mangaluru! Connect with us on social media, share your travel stories and photos, and be part of our growing community of explorers passionate about uncovering the beauty of Mangaluru.
<br/>
<br/>
<h3>Future Endeavors:</h3>
As we continue our journey of exploration, we are committed to expanding our coverage to showcase the diverse attractions and experiences Mangaluru has to offer. From collaborating with local artisans and conservation initiatives to organizing immersive travel events, we are dedicated to enriching the travel experience and promoting responsible tourism.
    </p>
    
  </div>
);

const Contact = () => (
  <div className="container contact-container">
    <h1>Contact Us</h1>
    <p>If you have any questions, inquiries, or feedback, please don't hesitate to get in touch with us. We'd love to hear from you!</p>
    <ul>
      <li><strong>Phone Number:</strong> 1234567890</li>
      <li><strong>Email:</strong> info@bloggernammakudla.com</li>
      
    </ul>
    <p>Connect with us on social media:</p>
    <ul>
      <li><a href="https://www.facebook.com/bloomhaven">Facebook</a></li>
      <li><a href="https://www.instagram.com/bloomhaven">Instagram</a></li>
      <li><a href="https://www.twitter.com/bloomhaven">Twitter</a></li>
    </ul>
    <h2> Feedback Form</h2>
    <h3>Provide us Your valuable feedback</h3>
    <form>
            <p><input type="text"id="Name"name="name"placeholder="Your name.."/>
            </p>
            <p>
                <textarea id="subject"name="subject"placeholder="enter your feedback"></textarea>
            </p>
            <p>
                <input type="submit"value="Submit"/>
            </p>

      </form>

    <p>We look forward to hearing from you!</p>
  </div>
);


const Gallery = () => (
  <div className="container gallery-container">
<h1 className="gallery-heading">Blogs</h1>

    <div className="gallery">
      <div className="image">
        <img src={img1} alt="Image 1 description" />
        <h2>Kadri Manjunatha Temple</h2>
        <p>Perched on the scenic Kadri Hill in Mangalore, Karnataka, Kadri Manjunath Temple is an ancient Hindu shrine venerating Lord Manjunatha, a manifestation of Lord Shiva. Dating back to the 10th century, it boasts a remarkable bronze statue of Lord Manjunatha and houses sanctums dedicated to Goddess Durga and Lord Ganesha. The temple's architecture, influenced by Dravidian and Kerala styles, is a testament to its cultural richness. Its annual Kadri Manjunath Temple Festival attracts pilgrims and tourists alike, offering a glimpse into the region's religious fervor and traditional festivities. With its serene ambiance and panoramic views of the Arabian Sea, the temple stands as a revered landmark in the spiritual landscape of the region.</p>
<p>Date:12-03-2023</p>
      </div>
      <div className="image">
        <img src={img2} alt="Image 2 description" />
        <h2>Panambur Beach</h2>
        <p>Panambur Beach is one of the most popular beaches in Mangaluru city in coastal Karnataka. Known to be one of the safest and well-maintained beaches, it is also famous for its dramatic sunset. The beach aura warms up during the carnivals, organized by the district authorities. The festivities include boat races, beach sports and sand sculpture contests. The beach has jet ski rides, boating, dolphin viewing, food stalls, besides trained beach lifeguards and patrol vehicles to ensure the safety of the visitors to the beach.The Beach is 9 kms from Mangaluru city. Mangaluru city is 350 kms from Bengaluru. Mangaluru is well connected by air, rail and road to rest of Karnataka. </p>
        <p>Date:23-04-2023</p>
      </div>
      <div className="image">
        <img src={img3} alt="Image 3 description" />
        <h2>Kateel Durgaparameshwari Temple</h2>
        <p>The Kateel Temple, situated in the picturesque village of Kateel near Mangalore, Karnataka, is a revered Hindu shrine dedicated to Goddess Durga Parameshwari. Perched on an islet amidst the serene waters of the River Nandini, the temple is renowned for its spiritual aura and scenic beauty. Devotees flock to this sacred site throughout the year, seeking blessings and solace from the divine goddess. The temple's architecture, adorned with intricate carvings and vibrant colors, adds to its allure and cultural significance. Navaratri, the nine-day festival celebrating the victory of good over evil, is observed with great fervor, attracting pilgrims and tourists from far and wide to experience the rich traditions and rituals of Kateel Temple.
</p>
<p>Date:10-09-2022</p>
      </div>
      <div className="image">
        <img src={img4} alt="Image 4 description" />
        <h2>Mangaladevi Temple</h2>
        <p>Residing in Bolara, 3 kms away from Mangalore, the auspicious Mangaladevi Temple is a Hindu temple dedicated to Mangaladevi, a form of god Shakti. The city of Mangalore derives its name from the deity presiding here. Of considerable significance due to its antiquity, the Mangaladevi Temple in Mangalore was built in the 9th century by the most famous ruler of Alupa dynasty, Kundavaram. It was expanded to its present stunning form by other kings later. The Mangaladevi temple represents an excellent masterpiece of the Kerala style architecture with most of the structure built of wood. The central shrine called 'Sreekovil’ holds an image of Mangaladevi in a seated posture. Many other shrines for more deities are present within the rectangular walls of the temple called Kshetra-Madilluka.

</p>
<p>Date:15-03-2023</p>
      </div>
      <div className="image">
        <img src={img5} alt="Image 5 description" />
        <h2>Aloysius Chapel</h2>
        <p>The Aloysius Chapel, nestled within St. Aloysius College in Mangalore, Karnataka, is a celebrated architectural gem. Constructed in the late 19th century, the chapel's interior is adorned with mesmerizing frescoes painted by the renowned Italian Jesuit Antonio Moscheni. These intricate paintings depict scenes from the life of Jesus Christ, along with various saints and biblical narratives. The chapel's Gothic-style architecture and ornate interiors make it a cherished cultural and religious landmark in the region. Its serene ambiance and artistic grandeur draw visitors from far and wide, offering a glimpse into the rich heritage of Mangalore. The Aloysius Chapel's intricate artwork and historical significance add to its allure, making it a must-visit destination for tourists and art aficionados exploring the vibrant cityscape of Mangalore.</p>
        <p>Date:02-08-2021</p>
      </div>
      <div className="image">
        <img src={img6} alt="Image 6 description" />
        <h2>Pilikula Nisargadhama</h2>
        <p>Pilikula Nisargadhama is a famous Infotainment Park in Mangalore created amidst nature to provide a rejuvenating experience. In Tulu, the name Pilikula means 'a pool of Tigers'. The region was once the natural habitat of Tigers who would visit the lake to drink water. Pilikula attracts not just nature lovers but also botanists, zoologists and students who wish to study the vast variety of plants and animals found here. Tourists can explore the landscape, the dense rainforest and the ponds in the region. Other than the serene natural landscape, Pilikula Nisargadhama is also famous for a number of recreational and infotainment activities. They also have a zoo, a botanical garden, a water park, a science centre and an artisan village. 

The guides explain all the aspects of Pilikula Nisargadhama in detail for an enriching experience. </p>
<p>Date:06-11-2023</p>
      </div>
    </div>
  </div>
);
const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </Router>
);
export default App;

