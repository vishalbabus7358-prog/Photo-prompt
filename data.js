// data.js

const promptsData = [
  {
    id: 1,
    category: "Family-Portraits",
    title: "Pucker Stack Chronicles 😗📸",
    image: "https://i.ibb.co/Mks40ghh/1.jpg",
    prompt:
      "Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members are arranged from back to top, with each person resting their hands gently on the head of the person in front of them, all making funny puckered-lip expressions and winking, creating a symmetrical, humorous composition. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks."
  },

  {
    id: 2,
    category: "Family-Portraits",
    title: "Expressions in Harmony 😲✌️",
    image: "https://i.ibb.co/jkHdd092/2.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members are arranged from back to front. Each person shows different playful expressions - some with big surprised expressions with wide open eyes and mouth in "O" shape, some with bright genuine smiles showing teeth with sparkling eyes. Hands alternate between forming heart shapes, making peace signs (V-gesture), and creating cute bunny ears gestures above or beside the person in front of them. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 3,
    category: "Family-Portraits",
    title: "Whispers of Love 🖤🤍",
    image: "https://i.ibb.co/35ygN1tY/3.webp",
    prompt:
      "Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members are arranged from back to front with tender loving expressions. Some have eyes closed with serene gentle smiles, some look directly at camera with warm loving smiles. Hands alternate between gently cupping around faces like frames, making finger-heart gestures (thumb and index finger forming small hearts), and pressing cheeks making adorable puffy faces. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks."
  },

  {
    id: 4,
    category: "Family-Portraits",
    title: "Cool Chaos Portraits 😎💋",
    image: "https://i.ibb.co/cKf0812p/4.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show playful cool expressions - some winking with wide happy smiles, some tilting heads with sweet shy smiles. Hands alternate between making "rock and roll" gestures (index and pinky up), resting under chins in thinking poses, blowing kisses, and waving hello gestures. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 5,
    category: "Family-Portraits",
    title: "Laugh Riot Tower 🤪🎭",
    image: "https://i.ibb.co/PGmMwpZV/5.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show silly funny expressions - some with exaggerated cross-eyed looks and tongues out, some laughing with mouths wide open showing genuine joy. Hands alternate between making silly "moose antlers" (hands spread like antlers), "OK" gestures (thumb and index forming circles), and covering mouths in giggling surprise poses. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 6,
    category: "Family-Portraits",
    title: "Midnight Mood Stack 🌙🔥",
    image: "https://i.ibb.co/mrMNTNN1/6.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show confident cool expressions - some with soft loving gazes and gentle smiles, some with dreamy looks gazing upward, some with smirks and raised eyebrows. Hands alternate between making "thumbs up" gestures enthusiastically, forming triangle/pyramid shapes with fingertips touching, and making "shaka" (hang loose) gestures. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 7,
    category: "Family-Portraits",
    title: "Elegant Drama Frames 👑🫶",
    image: "https://i.ibb.co/tpv0nKSs/7.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show elegant playful expressions - some looking to the side with pursed lips, some with confident smiles and raised eyebrows, some with adorable gap-toothed smiles. Hands alternate between making "prayer" or "namaste" gestures (palms together), "chef\'s kiss" gestures (fingertips bunched and kissing), and placing both hands under chins in sweet innocent poses. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 8,
    category: "Family-Portraits",
    title: "Playful Energy Symphony ✨🎉",
    image: "https://i.ibb.co/JRb0ZrxQ/8.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show energetic playful expressions - some with big enthusiastic smiles and eyes wide open in excitement, some with elegant smiles and eyes gently closed, some with curious tilted heads. Hands alternate between making "double peace signs" (both hands V-gesture), gracefully positioned like holding invisible balls, and making "shh" gestures with fingers on lips or pointing upward. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 9,
    category: "Family-Portraits",
    title: "Joy in Monochrome 🐾📷",
    image: "https://i.ibb.co/Pv8rBmvc/9.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show sweet joyful expressions - some with sophisticated smiles and winking eyes, some with bright laughing expressions and crinkled eyes, some with wide excited grins showing all teeth. Hands alternate between making "L" shape frames creating viewfinder gestures, making cute "paw" gestures (bent fingers like cat paws), and making small finger hearts on both sides. All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

  {
    id: 10,
    category: "Family-Portraits",
    title: "Crowned With Love 👑❤️",
    image: "https://i.ibb.co/QvmK419W/10.webp",
    prompt:
      'Edit the image: A dramatic black-and-white studio portrait of a playful family stacked vertically in a creative pose. Family members show loving expressions - some with warm tender smiles looking down with eyes full of love, some with joyful laughs and heads tilted back, some with adorable scrunched nose smiles and squinting eyes. Hands alternate between making "crown" gestures (fingers forming crown shapes), making "jazz hands" (fingers spread wide with excitement), and making "I love you" sign language gestures (thumb, index and pinky extended). All subjects are wearing simple dark clothing (black sweaters or tops), creating a clean, minimalist look. The background is a deep solid black seamless backdrop with no visible texture, giving strong subject separation and a timeless studio feel. Lighting is soft but directional studio lighting, sculpting facial features with gentle highlights and smooth shadows, emphasizing facial expressions and hand shapes. High contrast monochrome tones with rich blacks.'
  },

    // --- Aesthetic Girl Poster Designs (IDs 11 to 20) ---
    {
        id: 11,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Sky Blue Double Exposure",
        image: "https://i.ibb.co/GvMMpwtY/file-00000000e35c71fa86f602f833ebf4cf.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 1. Double Exposure Saree Style. A beautiful Indian woman with a long braid, wearing a vibrant sky blue saree and dark teal blouse. Artistic double exposure portrait on a clean white background. The upper composition shows a close-up smiling face with soft natural makeup, while the lower composition shows her wearing stylish sunglasses in a confident fashion pose. Watercolor splashes in yellow, pink, and blue flowing around the frame, delicate butterflies flying softly, dreamy feminine aesthetic, ultra realistic skin texture, cinematic lighting, premium Instagram edit style, soft cinematic glow, hyper realistic, DSLR photography, ultra detailed skin, minimal background clutter, elegant composition, 8k detailed artwork. At the bottom, '[Aapka Naam]' written in elegant black cursive calligraphy. --ar 9:16"
    },
    {
        id: 12,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Butterfly Elegance Poster",
        image: "https://i.ibb.co/bghdQbfm/file-00000000db2c7207b3accc32f0071ad2.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 2. Butterfly Collage Poster Style. Create a cinematic butterfly-themed collage poster of a young Indian woman wearing a deep teal saree with silver embroidery border. Large graceful full-body pose in the center, surrounded by 4 symmetrical portrait shots arranged like butterfly wings. Soft feather edges, dreamy pastel teal background, subtle mist and blurred greenery, glowing sunlight, smooth skin texture, editorial magazine aesthetic, luxury feminine vibe, hyper realistic, DSLR photography, ultra detailed skin detail, soft cinematic glow, minimal background clutter, ultra detailed realistic photography, 8k resolution. Stylish cursive title text 'Butterfly' at the bottom. --ar 9:16"
    },
    {
        id: 13,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Golden Bridal Glow",
        image: "https://i.ibb.co/wNH5NNC5/file-000000004de071faa56e5ed107c0e3c9.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 3. Warm Cinematic Traditional Portrait. Warm cinematic portrait collage of a South Asian woman in traditional Indian attire arranged in three horizontal frames. She wears a vibrant pink saree with elegant gold jewelry, mang tikka, soft glam makeup, expressive eyes, and calm graceful expression. Loose braided updo hairstyle with soft curls around the face. Warm golden lighting, cinematic shadows, rich Indian wedding aesthetic, shallow depth of field, hyper realistic, DSLR photography, ultra detailed skin texture, soft cinematic glow, minimal background clutter, luxury portrait photography, ultra realistic 8k detail. --ar 9:16"
    },
    {
        id: 14,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Insta Chibi Queen",
        image: "https://i.ibb.co/4RDznd1p/file-00000000acc471fa996139dc5217115c.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 4. Cute Chibi Cartoon Style. Cute 3D Chibi-style Indian girl character with oversized expressive eyes and adorable smile, wearing a trendy fashionable outfit, sitting on a giant Instagram logo. Pixar-inspired rendering style, soft cinematic lighting, glossy textures, vibrant pastel colors, aesthetic dreamy background, soft cinematic glow, minimal background clutter, ultra detailed 3D render, playful modern social media vibe, high detail character design, 4k quality. --ar 9:16"
    },
    {
        id: 15,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Royal Emerald Aura",
        image: "https://i.ibb.co/dwJftLbG/file-0000000088e87207b7964ac531f68b8a.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 5. Royal Emerald Saree Double Exposure. A stunning Indian woman wearing a royal emerald green silk saree with luxurious gold borders. Double exposure artistic edit on a clean white background. Upper composition features side-profile close-up with traditional jewelry, floral hair bun, elegant makeup. Lower composition shows her sitting gracefully on a vintage royal chair. Soft gold smoke and emerald green mist effects surrounding the image, premium royal aesthetic, hyper realistic, DSLR photography, ultra detailed skin texture, soft cinematic glow, minimal background clutter, ultra realistic cinematic photography, 8k resolution. '[Aapka Naam]' written in glowing gold cursive typography at the bottom. --ar 9:16"
    },
    {
        id: 16,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Lavender Soul Dream",
        image: "https://i.ibb.co/9mV87S6f/file-00000000784071faa8d82fb18a4bcc83.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 6. Lavender Dream Poster. Dreamy lavender-themed butterfly collage poster featuring a stylish young woman in a lavender lehenga standing elegantly in the center. Four circular portrait frames around her with different expressions: smiling, shy, dreamy, looking away. Background filled with lavender mist, soft white flowers, glowing particles, magical feminine atmosphere, cinematic soft lighting, pastel luxury aesthetic, hyper realistic, DSLR photography, ultra detailed skin detail, soft cinematic glow, minimal background clutter, ultra realistic 8k resolution. Title 'Lavender Soul' in elegant silver typography. --ar 9:16"
    },
    {
        id: 17,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Sunset Garden Glow",
        image: "https://i.ibb.co/rg5jT1B/file-00000000757471faa0480b1a22614928.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 7. Sunset Glow Cinematic Saree. Warm cinematic portrait collage of an Indian girl in a sunset-orange chiffon saree. Three elegant vertical frames showing: 1) close-up eyes reflecting golden sunlight, 2) walking through a dreamy flower garden, 3) delicate hand holding a flower. Golden hour lighting, soft bokeh, warm cinematic tones, realistic Indian beauty aesthetic, shallow depth of field, hyper realistic, DSLR photography, ultra detailed skin texture, soft cinematic glow, minimal background clutter, luxury editorial photography style, ultra detailed 8k realism. --ar 9:16"
    },
    {
        id: 18,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Urban Chic Street Vibes",
        image: "https://i.ibb.co/yFyTBvyw/file-0000000026f871fa8f71620e1926c6b9.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 8. Urban Chic Indo-Western Style. Creative double exposure portrait of a modern Indian girl wearing a white Chikankari kurta with blue denim jeans. Upper exposure features stylish sunglasses and confident facial expression. Lower exposure shows her walking through an urban city street. Indigo blue ink splashes, soft grey smoke effects, contemporary fashion aesthetic, cinematic urban mood, hyper realistic, DSLR photography, ultra detailed skin texture, soft cinematic glow, minimal background clutter, trendy influencer photography style, 8k ultra detailed image. '[Aapka Naam]' in bold modern typography. --ar 9:16"
    },
    {
        id: 19,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Floral Vibe Fantasy",
        image: "https://i.ibb.co/DggPmt1c/file-00000000b30071fab6ff16dbfde422fc.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 9. Pastel Pink Garden Poster. High-resolution butterfly collage poster of a girl wearing a pastel pink floral dress. Main image shows her twirling gracefully in a flower garden. Five smaller square frames displaying jewelry, makeup, smile, eyes, and floral accessories. Background filled with 3D pink butterflies, soft sunlight rays through trees, dreamy cinematic atmosphere, hyper realistic, DSLR photography, ultra detailed skin texture, soft cinematic glow, minimal background clutter, luxury magazine poster style, 8k detail. 'Floral Vibe' text at the bottom. --ar 9:16"
    },
    {
        id: 20,
        category: "Aesthetic-Girl-Poster-Designs",
        title: "Neon Red Attitude",
        image: "https://i.ibb.co/233jPTHX/file-00000000ab547207bef4057ade3789bc.png",
        prompt: "[Use uploaded face image as exact facial reference. Preserve identical facial structure, skin tone, hairstyle, eyes, nose, lips, jawline, and expression accuracy. Maintain face consistency and identity lock in all variations.] 10. Bold Red & Black Attitude Style. Dramatic double exposure portrait of an Indian woman wearing a bold red saree with black sleeveless blouse. Upper composition features an intense fierce close-up expression. Lower composition shows her confidently standing under a street lamp at night. Red and black splash art background, cinematic neon glow, high contrast shadows, stylish fashion editorial vibe, hyper realistic, DSLR photography, ultra detailed skin texture, soft cinematic glow, minimal background clutter, ultra realistic detail, dark luxury aesthetic, 8k cinematic photography. '[Aapka Naam]' written in glowing neon red typography. --ar 9:16"
    }
    ];
