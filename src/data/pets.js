const pets = [
  // Dogs - Various Breeds
  {
    id: 1,
    name: 'Bella',
    type: 'Dog',
    breed: 'Golden Retriever',
    age: '3 years',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=300&q=80',
    description: 'A friendly and intelligent Golden Retriever who loves swimming and playing fetch. Perfect family dog with a gentle temperament.',
    adopted: false,
    size: 'Large',
    gender: 'Female'
  },
  {
    id: 2,
    name: 'Max',
    type: 'Dog',
    breed: 'German Shepherd',
    age: '4 years',
    image: 'https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&w=300&q=80',
    description: 'A loyal and protective German Shepherd. Excellent guard dog who is also great with children when properly trained.',
    adopted: false,
    size: 'Large',
    gender: 'Male'
  },
  {
    id: 3,
    name: 'Luna',
    type: 'Dog',
    breed: 'Siberian Husky',
    age: '2 years',
    image: 'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?auto=compress&w=300&q=80',
    description: 'A beautiful husky with striking blue eyes. High energy dog who loves running and outdoor adventures.',
    adopted: false,
    size: 'Large',
    gender: 'Female'
  },
  {
    id: 4,
    name: 'Daisy',
    type: 'Dog',
    breed: 'Beagle',
    age: '1 year',
    image: 'https://images.pexels.com/photos/460775/pexels-photo-460775.jpeg?auto=compress&w=300&q=80',
    description: 'A sweet and curious Beagle puppy. Great with families and loves to follow scents and explore.',
    adopted: false,
    size: 'Medium',
    gender: 'Female'
  },
  {
    id: 5,
    name: 'Rocky',
    type: 'Dog',
    breed: 'Bulldog',
    age: '5 years',
    image: 'https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&w=300&q=80',
    description: 'A gentle giant with a wrinkly face. Loves to lounge around and is very affectionate with his family.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 6,
    name: 'Buddy',
    type: 'Dog',
    breed: 'Labrador Retriever',
    age: '2 years',
    image: 'https://images.pexels.com/photos/8700/pexels-photo.jpg?auto=compress&w=300&q=80',
    description: 'A playful and energetic Labrador who loves water and retrieving games. Perfect companion for active families.',
    adopted: false,
    size: 'Large',
    gender: 'Male'
  },
  {
    id: 7,
    name: 'Sophie',
    type: 'Dog',
    breed: 'Poodle',
    age: '3 years',
    image: 'https://images.pexels.com/photos/4587996/pexels-photo-4587996.jpeg?auto=compress&w=300&q=80',
    description: 'An intelligent and elegant Poodle. Hypoallergenic and great for families with allergies.',
    adopted: false,
    size: 'Medium',
    gender: 'Female'
  },
  {
    id: 8,
    name: 'Cooper',
    type: 'Dog',
    breed: 'Border Collie',
    age: '2 years',
    image: 'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?auto=compress&w=300&q=80',
    description: 'A highly intelligent and energetic Border Collie. Loves herding and needs lots of mental stimulation.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 9,
    name: 'Ruby',
    type: 'Dog',
    breed: 'Corgi',
    age: '1 year',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=300&q=80',
    description: 'A cute and spunky Corgi with short legs and a big personality. Loves to play and is very loyal.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  },
  {
    id: 10,
    name: 'Bear',
    type: 'Dog',
    breed: 'Saint Bernard',
    age: '4 years',
    image: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&w=300&q=80',
    description: 'A gentle giant Saint Bernard. Very patient and loving, great with children and other pets.',
    adopted: false,
    size: 'Large',
    gender: 'Male'
  },

  // Cats - Various Breeds
  {
    id: 11,
    name: 'Milo',
    type: 'Cat',
    breed: 'Tabby',
    age: '2 years',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=300&q=80',
    description: 'A playful and affectionate tabby cat. Loves to chase toys and cuddle on your lap.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 12,
    name: 'Oliver',
    type: 'Cat',
    breed: 'Persian',
    age: '3 years',
    image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&w=300&q=80',
    description: 'A beautiful Persian cat with long, luxurious fur. Calm and gentle, loves to be groomed.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 13,
    name: 'Luna',
    type: 'Cat',
    breed: 'Siamese',
    age: '1 year',
    image: 'https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&w=300&q=80',
    description: 'A vocal and intelligent Siamese cat. Very social and loves to talk to her humans.',
    adopted: false,
    size: 'Medium',
    gender: 'Female'
  },
  {
    id: 14,
    name: 'Shadow',
    type: 'Cat',
    breed: 'Black Domestic Shorthair',
    age: '4 years',
    image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&w=300&q=80',
    description: 'A sleek black cat with golden eyes. Independent but affectionate, loves to explore.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 15,
    name: 'Whiskers',
    type: 'Cat',
    breed: 'Maine Coon',
    age: '2 years',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=300&q=80',
    description: 'A large and fluffy Maine Coon. Gentle giant who loves water and is very dog-like in personality.',
    adopted: false,
    size: 'Large',
    gender: 'Male'
  },
  {
    id: 16,
    name: 'Bella',
    type: 'Cat',
    breed: 'Ragdoll',
    age: '1 year',
    image: 'https://images.pexels.com/photos/326875/pexels-photo-326875.jpeg?auto=compress&w=300&q=80',
    description: 'A beautiful Ragdoll cat with blue eyes. Very relaxed and goes limp when picked up.',
    adopted: false,
    size: 'Large',
    gender: 'Female'
  },
  {
    id: 17,
    name: 'Tiger',
    type: 'Cat',
    breed: 'Orange Tabby',
    age: '3 years',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=300&q=80',
    description: 'A friendly orange tabby with a big personality. Loves to play and is very social.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 18,
    name: 'Princess',
    type: 'Cat',
    breed: 'Russian Blue',
    age: '2 years',
    image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&w=300&q=80',
    description: 'A elegant Russian Blue with silver fur. Shy at first but very loyal once she trusts you.',
    adopted: false,
    size: 'Medium',
    gender: 'Female'
  },

  // Rabbits
  {
    id: 19,
    name: 'Charlie',
    type: 'Rabbit',
    breed: 'Holland Lop',
    age: '1 year',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&w=300&q=80',
    description: 'A cute Holland Lop with floppy ears. Gentle and loves to be petted and given treats.',
    adopted: false,
    size: 'Small',
    gender: 'Male'
  },
  {
    id: 20,
    name: 'Snowball',
    type: 'Rabbit',
    breed: 'Netherland Dwarf',
    age: '2 years',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&w=300&q=80',
    description: 'A tiny white Netherland Dwarf rabbit. Very energetic and loves to hop around and explore.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  },
  {
    id: 21,
    name: 'Thumper',
    type: 'Rabbit',
    breed: 'Rex',
    age: '1 year',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&w=300&q=80',
    description: 'A soft Rex rabbit with velvety fur. Very calm and loves to be held and cuddled.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 22,
    name: 'Bunny',
    type: 'Rabbit',
    breed: 'Lionhead',
    age: '1 year',
    image: 'https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&w=300&q=80',
    description: 'A fluffy Lionhead rabbit with a mane-like fur around the head. Playful and loves attention.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  },

  // Other Pets
  {
    id: 23,
    name: 'Coco',
    type: 'Parrot',
    breed: 'African Grey',
    age: '5 years',
    image: 'https://images.pexels.com/photos/45911/peacock-bird-plumage-color-45911.jpeg?auto=compress&w=300&q=80',
    description: 'A highly intelligent African Grey parrot. Can mimic speech and loves to solve puzzles.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 24,
    name: 'Nibbles',
    type: 'Guinea Pig',
    breed: 'American',
    age: '1 year',
    image: 'https://images.pexels.com/photos/45851/guinea-pig-rodent-cute-animal-45851.jpeg?auto=compress&w=300&q=80',
    description: 'A friendly guinea pig who loves fresh vegetables and gentle handling.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  },
  {
    id: 25,
    name: 'Spike',
    type: 'Hamster',
    breed: 'Syrian',
    age: '6 months',
    image: 'https://images.pexels.com/photos/161519/hamster-rodent-cute-golden-161519.jpeg?auto=compress&w=300&q=80',
    description: 'A cute Syrian hamster who loves to run on his wheel and store food in his cheeks.',
    adopted: false,
    size: 'Small',
    gender: 'Male'
  },
  {
    id: 26,
    name: 'Goldie',
    type: 'Fish',
    breed: 'Goldfish',
    age: '2 years',
    image: 'https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&w=300&q=80',
    description: 'A beautiful goldfish who loves to swim and explore her tank. Low maintenance pet.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  },
  {
    id: 27,
    name: 'Simba',
    type: 'Cat',
    breed: 'Bengal',
    age: '2 years',
    image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&w=300&q=80',
    description: 'A striking Bengal cat with a wild look and playful personality. Loves to climb and explore.',
    adopted: false,
    size: 'Medium',
    gender: 'Male'
  },
  {
    id: 28,
    name: 'Maggie',
    type: 'Dog',
    breed: 'Shih Tzu',
    age: '4 years',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&w=300&q=80',
    description: 'A sweet Shih Tzu who loves to be pampered and is great with kids.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  },
  {
    id: 29,
    name: 'Oscar',
    type: 'Dog',
    breed: 'Dachshund',
    age: '3 years',
    image: 'https://images.pexels.com/photos/4587997/pexels-photo-4587997.jpeg?auto=compress&w=300&q=80',
    description: 'A lively Dachshund with a long body and short legs. Loves to dig and chase toys.',
    adopted: false,
    size: 'Small',
    gender: 'Male'
  },
  {
    id: 30,
    name: 'Lily',
    type: 'Cat',
    breed: 'British Shorthair',
    age: '5 years',
    image: 'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&w=300&q=80',
    description: 'A calm and affectionate British Shorthair with plush fur and a round face.',
    adopted: false,
    size: 'Medium',
    gender: 'Female'
  },
  {
    id: 31,
    name: 'Peanut',
    type: 'Guinea Pig',
    breed: 'Abyssinian',
    age: '1 year',
    image: 'https://images.pexels.com/photos/45851/guinea-pig-rodent-cute-animal-45851.jpeg?auto=compress&w=300&q=80',
    description: 'A curious Abyssinian guinea pig with rosetted fur. Loves to squeak for treats.',
    adopted: false,
    size: 'Small',
    gender: 'Male'
  },
  {
    id: 32,
    name: 'Sunny',
    type: 'Parrot',
    breed: 'Sun Conure',
    age: '2 years',
    image: 'https://images.pexels.com/photos/45911/peacock-bird-plumage-color-45911.jpeg?auto=compress&w=300&q=80',
    description: 'A vibrant Sun Conure parrot who loves to whistle and mimic sounds. Very social and playful.',
    adopted: false,
    size: 'Small',
    gender: 'Female'
  }
];

export default pets; 