const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = 'd:/Full Stack/Softnova-2.0/src/images';

const tasks = [
  // Logo
  { src: 'soft-logo.png', dest: 'soft-logo.webp', maxWidth: 500 },
  
  // Slides
  { src: 'it_slide_1.png', dest: 'it_slide_1.webp', maxWidth: 1920 },
  { src: 'it_slide_2.png', dest: 'it_slide_2.webp', maxWidth: 1920 },
  { src: 'it_slide_3.png', dest: 'it_slide_3.webp', maxWidth: 1920 },
  
  // Ornaments
  { src: 'floating_gold_sphere.png', dest: 'floating_gold_sphere.webp', maxWidth: 350 },
  { src: 'floating_glass_torus.png', dest: 'floating_glass_torus.webp', maxWidth: 350 },
  { src: 'floating_tech_node.png', dest: 'floating_tech_node.webp', maxWidth: 350 },
  { src: 'float4.png', dest: 'float4.webp', maxWidth: 350 },
  { src: 'float5.png', dest: 'float5.webp', maxWidth: 350 },
  { src: 'float6.png', dest: 'float6.webp', maxWidth: 350 },
  { src: 'float7.png', dest: 'float7.webp', maxWidth: 350 },
  { src: 'floating_amber_crescent.png', dest: 'float1.webp', maxWidth: 350 }
];

async function run() {
  console.log('Starting image optimization and WebP conversion...');
  for (const task of tasks) {
    const srcPath = path.join(imagesDir, task.src);
    const destPath = path.join(imagesDir, task.dest);
    
    if (!fs.existsSync(srcPath)) {
      console.warn(`Warning: Source file does not exist: ${task.src}`);
      continue;
    }
    
    try {
      console.log(`Processing: ${task.src} -> ${task.dest} (max width: ${task.maxWidth}px)`);
      const image = sharp(srcPath);
      const metadata = await image.metadata();
      
      let pipeline = image;
      if (metadata.width > task.maxWidth) {
        pipeline = pipeline.resize({ width: task.maxWidth, withoutEnlargement: true });
      }
      
      await pipeline
        .webp({ quality: 80 })
        .toFile(destPath);
        
      const oldSize = (fs.statSync(srcPath).size / (1024 * 1024)).toFixed(2);
      const newSize = (fs.statSync(destPath).size / 1024).toFixed(2);
      console.log(`Successfully converted ${task.src} (${oldSize} MB) -> ${task.dest} (${newSize} KB)`);
    } catch (err) {
      console.error(`Error processing ${task.src}:`, err);
    }
  }
  console.log('All conversion tasks completed.');
}

run();
