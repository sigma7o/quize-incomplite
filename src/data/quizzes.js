// src/data/quizzes.js

export const quizData = [
  {
    id: 'history',
    category: "History",
    // No image for the category itself
    topics: [
      {
        id: 101,
        title: "Ancient Civilizations",
        image: "https://images.unsplash.com/photo-1579737299583-b778749a37ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Explore the fascinating world of ancient civilizations.",
        difficulty: "Medium",
        questions: [
          {
            question: "Which ancient civilization built the pyramids of Giza?",
            options: ["Roman", "Greek", "Egyptian", "Mayan"],
            correctAnswer: "Egyptian",
            image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Who was the first emperor of Rome?",
            options: ["Julius Caesar", "Nero", "Augustus", "Constantine"],
            correctAnswer: "Augustus",
            image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "What famous structure was built by the Qin Dynasty in China?",
            options: ["Forbidden City", "Terracotta Army", "Great Wall of China", "Potala Palace"],
            correctAnswer: "Great Wall of China",
            image: "https://images.unsplash.com/photo-1520245237242-cb391781211b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Which ancient city was home to the Hanging Gardens, one of the Seven Wonders of the Ancient World?",
            options: ["Athens", "Rome", "Babylon", "Alexandria"],
            correctAnswer: "Babylon",
            image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Who was the legendary king of the Greek city-state of Mycenae, known for the Trojan War?",
            options: ["Odysseus", "Achilles", "Agamemnon", "Hector"],
            correctAnswer: "Agamemnon",
            image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Which river was central to the development of the ancient Egyptian civilization?",
            options: ["Tigris", "Euphrates", "Nile", "Indus"],
            correctAnswer: "Nile",
            image: "https://images.unsplash.com/photo-1558913926-d9223126f947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "What was the primary writing system of ancient Egypt?",
            options: ["Cuneiform", "Hieroglyphs", "Sanskrit", "Alphabet"],
            correctAnswer: "Hieroglyphs",
            image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Which ancient civilization developed the concept of democracy?",
            options: ["Roman", "Greek", "Persian", "Egyptian"],
            correctAnswer: "Greek",
            image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Who was the famous queen of Egypt who had relationships with Julius Caesar and Mark Antony?",
            options: ["Nefertiti", "Hatshepsut", "Cleopatra", "Ankhesenamun"],
            correctAnswer: "Cleopatra",
            image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Which ancient civilization is credited with inventing the wheel?",
            options: ["Egyptian", "Greek", "Mesopotamian", "Roman"],
            correctAnswer: "Mesopotamian",
            image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      {
        id: 102,
        title: "World Wars",
        image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Test your knowledge on the major global conflicts.",
        difficulty: "Hard",
        questions: [
          {
            question: "When did World War I officially begin?",
            options: ["1912", "1914", "1916", "1918"],
            correctAnswer: "1914",
            image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Who was the leader of Nazi Germany during World War II?",
            options: ["Benito Mussolini", "Joseph Stalin", "Winston Churchill", "Adolf Hitler"],
            correctAnswer: "Adolf Hitler",
            image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "What event officially started World War II in Europe?",
            options: ["Pearl Harbor attack", "Invasion of Poland", "Battle of Britain", "Fall of France"],
            correctAnswer: "Invasion of Poland",
            image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Which two cities were hit by atomic bombs at the end of WWII?",
            options: ["Tokyo and Kyoto", "Hiroshima and Nagasaki", "Berlin and Dresden", "London and Coventry"],
            correctAnswer: "Hiroshima and Nagasaki",
            image: "https://images.unsplash.com/photo-1629853923308-412702a0a256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "What was the name of the alliance formed by Germany, Italy, and Japan in WWII?",
            options: ["Allies", "Central Powers", "Axis Powers", "Triple Entente"],
            correctAnswer: "Axis Powers",
            image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "The Treaty of Versailles formally ended which war?",
            options: ["World War II", "Napoleonic Wars", "World War I", "Korean War"],
            correctAnswer: "World War I",
            image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Who was the President of the United States when World War II ended?",
            options: ["Franklin D. Roosevelt", "Harry S. Truman", "Dwight D. Eisenhower", "John F. Kennedy"],
            correctAnswer: "Harry S. Truman",
            image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "What was the codename for the Allied invasion of Normandy on June 6, 1944?",
            options: ["Operation Market Garden", "Operation Barbarossa", "Operation Overlord", "Operation Desert Storm"],
            correctAnswer: "Operation Overlord",
            image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "Which country was neutral throughout both World War I and World War II?",
            options: ["Switzerland", "Sweden", "Spain", "Ireland"],
            correctAnswer: "Switzerland",
            image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          },
          {
            question: "What was the primary goal of the Manhattan Project?",
            options: ["To develop radar technology", "To break the Enigma code", "To build the atomic bomb", "To create jet engines"],
            correctAnswer: "To build the atomic bomb",
            image: "https://images.unsplash.com/photo-1520245237242-cb391781211b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        ]
      },
      // --- Add 8 more History topics here, each with 10 questions and images for each question ---
      {
        id: 103,
        title: "Cold War Era",
        image: "https://images.unsplash.com/photo-1607592965384-5a8b7c7b8e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Questions about the geopolitical tension after WWII.",
        difficulty: "Medium",
        questions: [
          { question: "What was the Berlin Wall's purpose?", options: ["Trade barrier", "Border control", "Containment of communism", "Tourist attraction"], correctAnswer: "Containment of communism", image: "https://images.unsplash.com/photo-1620536412630-d3a6d17ac471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "Which doctrine aimed to prevent the spread of communism?", options: ["Monroe Doctrine", "Truman Doctrine", "Nixon Doctrine", "Bush Doctrine"], correctAnswer: "Truman Doctrine", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "What was the primary alliance of Western countries during the Cold War?", options: ["Warsaw Pact", "NATO", "SEATO", "CENTO"], correctAnswer: "NATO", image: "https://images.unsplash.com/photo-1607592965384-5a8b7c7b8e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "The Cuban Missile Crisis occurred in which year?", options: ["1959", "1960", "1962", "1965"], correctAnswer: "1962", image: "https://images.unsplash.com/photo-1607592965384-5a8b7c7b8e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "Who coined the term 'Iron Curtain'?", options: ["Harry S. Truman", "Winston Churchill", "Joseph Stalin", "Mao Zedong"], correctAnswer: "Winston Churchill", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "What was the space race primarily between?", options: ["USA and China", "USA and USSR", "USSR and China", "USA and UK"], correctAnswer: "USA and USSR", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which conflict is often considered a 'proxy war' of the Cold War?", options: ["Gulf War", "Vietnam War", "Falklands War", "Korean War"], correctAnswer: "Vietnam War", image: "https://images.unsplash.com/photo-1607592965384-5a8b7c7b8e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "The fall of which significant structure marked a symbolic end to the Cold War?", options: ["Great Wall of China", "Tower of London", "Berlin Wall", "Colosseum"], correctAnswer: "Berlin Wall", image: "https://images.unsplash.com/photo-1620536412630-d3a6d17ac471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "Which US President initiated the Strategic Defense Initiative (SDI), dubbed 'Star Wars'?", options: ["Richard Nixon", "Jimmy Carter", "Ronald Reagan", "George H.W. Bush"], correctAnswer: "Ronald Reagan", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the policy of 'détente' during the Cold War?", options: ["Military buildup", "Increased tension", "Relaxation of strained relations", "Economic sanctions"], correctAnswer: "Relaxation of strained relations", image: "https://images.unsplash.com/photo-1607592965384-5a8b7c7b8e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        ]
      },
      {
        id: 104,
        title: "Indian History",
        image: "https://images.unsplash.com/photo-1558913926-d9223126f947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Key events and figures from India's rich past.",
        difficulty: "Medium",
        questions: [
          { question: "Who was known as the 'Father of the Nation' in India?", options: ["Jawaharlal Nehru", "Sardar Patel", "Mahatma Gandhi", "Subhas Chandra Bose"], correctAnswer: "Mahatma Gandhi", image: "https://images.unsplash.com/photo-1558913926-d9223126f947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "When did India gain independence?", options: ["1942", "1947", "1950", "1962"], correctAnswer: "1947", image: "https://images.unsplash.com/photo-1558913926-d9223126f947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          { question: "Who built the Taj Mahal?", options: ["Akbar", "Humayun", "Shah Jahan", "Aurangzeb"], correctAnswer: "Shah Jahan", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Battle of Panipat (first) was fought in which year?", options: ["1526", "1556", "1757", "1761"], correctAnswer: "1526", image: "https://images.unsplash.com/photo-1520245237242-cb391781211b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first female Prime Minister of India?", options: ["Sonia Gandhi", "Benazir Bhutto", "Indira Gandhi", "Pratibha Patil"], correctAnswer: "Indira Gandhi", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Dandi March was led by whom?", options: ["Sardar Vallabhbhai Patel", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"], correctAnswer: "Mahatma Gandhi", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which ancient university was a prominent center of learning in India?", options: ["Oxford", "Nalanda", "Cambridge", "Sorbonne"], correctAnswer: "Nalanda", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Sepoy Mutiny (First War of Indian Independence) happened in which year?", options: ["1800", "1857", "1900", "1947"], correctAnswer: "1857", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the founder of the Maurya Dynasty?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"], correctAnswer: "Chandragupta Maurya", image: "https://images.unsplash.com/photo-1629853923308-412702a0a256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Vedas are sacred texts of which religion?", options: ["Islam", "Christianity", "Hinduism", "Buddhism"], correctAnswer: "Hinduism", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 105,
        title: "European History",
        image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Events and figures from the history of Europe.",
        difficulty: "Hard",
        questions: [
          { question: "Who famously said 'L'état, c'est moi' (I am the state)?", options: ["Louis XIV", "Napoleon Bonaparte", "Queen Elizabeth I", "Peter the Great"], correctAnswer: "Louis XIV", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The French Revolution began in which year?", options: ["1776", "1789", "1804", "1815"], correctAnswer: "1789", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first Roman Emperor?", options: ["Julius Caesar", "Augustus", "Nero", "Tiberius"], correctAnswer: "Augustus", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the Renaissance primarily a revival of?", options: ["Feudalism", "Islamic art", "Classical art and learning", "Socialism"], correctAnswer: "Classical art and learning", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which war involved the conflict between the Roundheads and Cavaliers?", options: ["Hundred Years' War", "Wars of the Roses", "English Civil War", "Napoleonic Wars"], correctAnswer: "English Civil War", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the Queen of England during the Spanish Armada invasion attempt?", options: ["Mary I", "Victoria", "Elizabeth I", "Anne Boleyn"], correctAnswer: "Elizabeth I", image: "https://images.unsplash.com/photo-1520245237242-cb391781211b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The fall of the Western Roman Empire traditionally occurred in which year?", options: ["395 AD", "410 AD", "476 AD", "500 AD"], correctAnswer: "476 AD", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which city was the capital of the Byzantine Empire?", options: ["Rome", "Athens", "Constantinople", "Alexandria"], correctAnswer: "Constantinople", image: "https://images.unsplash.com/photo-1620536412630-d3a6d17ac471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the key figure of the Protestant Reformation?", options: ["John Calvin", "Martin Luther", "Henry VIII", "Ignatius of Loyola"], correctAnswer: "Martin Luther", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The invention of the printing press is attributed to whom?", options: ["Leonardo da Vinci", "Galileo Galilei", "Johannes Gutenberg", "Isaac Newton"], correctAnswer: "Johannes Gutenberg", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 106,
        title: "American History",
        image: "https://images.unsplash.com/photo-1629853923308-412702a0a256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Significant events and personalities in American history.",
        difficulty: "Medium",
        questions: [
          { question: "In what year did the United States declare independence?", options: ["1774", "1776", "1783", "1789"], correctAnswer: "1776", image: "https://images.unsplash.com/photo-1629853923308-412702a0a256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"], correctAnswer: "George Washington", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Civil War in the U.S. was fought between which years?", options: ["1850-1855", "1861-1865", "1870-1875", "1890-1895"], correctAnswer: "1861-1865", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who delivered the 'I Have a Dream' speech?", options: ["Malcolm X", "Martin Luther King Jr.", "Rosa Parks", "Nelson Mandela"], correctAnswer: "Martin Luther King Jr.", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What major event happened on December 7, 1941?", options: ["D-Day", "Battle of Midway", "Pearl Harbor attack", "VE Day"], correctAnswer: "Pearl Harbor attack", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who wrote the Declaration of Independence?", options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Adams"], correctAnswer: "Thomas Jefferson", image: "https://images.unsplash.com/photo-1520245237242-cb391781211b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the 'Great Depression'?", options: ["A major war", "An economic downturn", "A political scandal", "A cultural movement"], correctAnswer: "An economic downturn", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which purchase significantly expanded the territory of the United States?", options: ["Alaska Purchase", "Louisiana Purchase", "Gadsden Purchase", "Florida Purchase"], correctAnswer: "Louisiana Purchase", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was Abraham Lincoln?", options: ["A general", "A scientist", "A president", "A writer"], correctAnswer: "A president", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The 'Boston Tea Party' was an act of protest against what?", options: ["Sugar Act", "Stamp Act", "Tea Act", "Quartering Act"], correctAnswer: "Tea Act", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 107,
        title: "African History",
        image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "From ancient kingdoms to modern nations.",
        difficulty: "Hard",
        questions: [
          { question: "Which ancient empire was located in present-day Ethiopia and Eritrea?", options: ["Ghana", "Mali", "Aksum", "Songhai"], correctAnswer: "Aksum", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was a prominent leader in the anti-apartheid movement in South Africa?", options: ["Desmond Tutu", "Steve Biko", "Nelson Mandela", "Thabo Mbeki"], correctAnswer: "Nelson Mandela", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The ancient city of Timbuktu was a major center for what?", options: ["Gold mining", "Slave trade", "Learning and trade", "Diamond trade"], correctAnswer: "Learning and trade", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which European country colonized the Congo?", options: ["France", "Britain", "Belgium", "Germany"], correctAnswer: "Belgium", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the 'Scramble for Africa'?", options: ["A gold rush", "A period of European colonization", "A major famine", "An animal migration"], correctAnswer: "A period of European colonization", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which ancient civilization flourished along the Nile River in what is now Sudan?", options: ["Carthage", "Nubia", "Axum", "Great Zimbabwe"], correctAnswer: "Nubia", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Kingdom of Benin was famous for its what?", options: ["Textiles", "Bronze sculptures", "Pottery", "Iron tools"], correctAnswer: "Bronze sculptures", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which country was the first sub-Saharan African nation to gain independence from colonial rule?", options: ["Nigeria", "Ghana", "Kenya", "South Africa"], correctAnswer: "Ghana", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the founder of ancient Egypt's first dynasty?", options: ["Khufu", "Tutankhamun", "Menes", "Ramesses II"], correctAnswer: "Menes", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Great Zimbabwe ruins are found in which modern country?", options: ["Zambia", "Botswana", "Zimbabwe", "Mozambique"], correctAnswer: "Zimbabwe", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 108,
        title: "Asian History",
        image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "From the Silk Road to modern Asia.",
        difficulty: "Medium",
        questions: [
          { question: "Who was the founder of the Mongol Empire?", options: ["Kublai Khan", "Genghis Khan", "Batu Khan", "Timur"], correctAnswer: "Genghis Khan", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which dynasty ruled China for the longest period?", options: ["Han", "Tang", "Zhou", "Qing"], correctAnswer: "Zhou", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the primary purpose of the Silk Road?", options: ["Military invasion", "Cultural exchange and trade", "Religious pilgrimage", "Scientific research"], correctAnswer: "Cultural exchange and trade", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first emperor of unified Japan?", options: ["Emperor Meiji", "Emperor Hirohito", "Emperor Jimmu", "Toyotomi Hideyoshi"], correctAnswer: "Emperor Jimmu", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Opium Wars were fought primarily between which two countries?", options: ["China and Russia", "China and Japan", "China and Britain", "China and USA"], correctAnswer: "China and Britain", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who founded the Mughal Empire in India?", options: ["Akbar", "Humayun", "Babur", "Shah Jahan"], correctAnswer: "Babur", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the Meiji Restoration in Japan?", options: ["A period of isolation", "Restoration of imperial rule and modernization", "A civil war", "A religious revival"], correctAnswer: "Restoration of imperial rule and modernization", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which country was the 'Hermit Kingdom'?", options: ["China", "Japan", "Korea", "Vietnam"], correctAnswer: "Korea", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Angkor Wat temple complex is located in which country?", options: ["Thailand", "Vietnam", "Cambodia", "Laos"], correctAnswer: "Cambodia", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the last emperor of China?", options: ["Kangxi Emperor", "Qianlong Emperor", "Puyi", "Cixi"], correctAnswer: "Puyi", image: "https://images.unsplash.com/photo-1551624838-518b5c92c300?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 109,
        title: "Middle Ages",
        image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The period from the fall of Rome to the Renaissance.",
        difficulty: "Medium",
        questions: [
          { question: "What was the predominant social system in medieval Europe?", options: ["Communism", "Capitalism", "Feudalism", "Socialism"], correctAnswer: "Feudalism", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the main cause of the Black Death?", options: ["Poor sanitation", "Fleas on rats", "Contaminated water", "Air pollution"], correctAnswer: "Fleas on rats", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who led the Norman Conquest of England in 1066?", options: ["King Arthur", "Alfred the Great", "William the Conqueror", "Richard the Lionheart"], correctAnswer: "William the Conqueror", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What were the Crusades?", options: ["Trade expeditions", "Religious wars to reclaim the Holy Land", "Scientific explorations", "Political alliances"], correctAnswer: "Religious wars to reclaim the Holy Land", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which legendary figure is associated with the Knights of the Round Table?", options: ["Robin Hood", "King Arthur", "Charlemagne", "Genghis Khan"], correctAnswer: "King Arthur", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the Magna Carta?", options: ["A peace treaty", "A religious decree", "A charter of rights", "A scientific discovery"], correctAnswer: "A charter of rights", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Hundred Years' War was primarily fought between which two countries?", options: ["France and Germany", "England and Spain", "France and England", "Italy and Austria"], correctAnswer: "France and England", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which city was the capital of the Islamic Golden Age?", options: ["Cairo", "Cordoba", "Baghdad", "Damascus"], correctAnswer: "Baghdad", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was a knight's code of conduct called?", options: ["Loyalty", "Fealty", "Chivalry", "Honor"], correctAnswer: "Chivalry", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The term 'Viking' refers to people from which region?", options: ["Mediterranean", "East Asia", "Scandinavia", "North Africa"], correctAnswer: "Scandinavia", image: "https://images.unsplash.com/photo-1589254005934-8b6b0b4f8c14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 110,
        title: "Industrial Revolution",
        image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The era of major technological advancements and social change.",
        difficulty: "Medium",
        questions: [
          { question: "Where did the Industrial Revolution begin?", options: ["United States", "France", "Germany", "Great Britain"], correctAnswer: "Great Britain", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the primary power source for early factories?", options: ["Electricity", "Oil", "Steam", "Wind"], correctAnswer: "Steam", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who invented the steam engine?", options: ["James Watt", "Eli Whitney", "Henry Ford", "Thomas Edison"], correctAnswer: "James Watt", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What major invention revolutionized textile production?", options: ["Cotton gin", "Spinning Jenny", "Power loom", "Sewing machine"], correctAnswer: "Spinning Jenny", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was a significant social consequence of industrialization?", options: ["Increased rural population", "Growth of urban centers", "Decline of trade", "Reduction in poverty"], correctAnswer: "Growth of urban centers", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who wrote 'The Wealth of Nations'?", options: ["Karl Marx", "Friedrich Engels", "Adam Smith", "David Ricardo"], correctAnswer: "Adam Smith", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVRufDB4fHx8fA%3D%3D" },
          { question: "The Bessemer process revolutionized the production of what material?", options: ["Textiles", "Glass", "Steel", "Paper"], correctAnswer: "Steel", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What significant social class emerged as a result of the Industrial Revolution?", options: ["Nobility", "Peasants", "Middle class", "Clergy"], correctAnswer: "Middle class", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who is known for inventing the electric light bulb?", options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "Guglielmo Marconi"], correctAnswer: "Thomas Edison", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What new form of transportation was developed during this period?", options: ["Horse and buggy", "Sailboat", "Steam locomotive", "Hot air balloon"], correctAnswer: "Steam locomotive", image: "https://images.unsplash.com/photo-1579547530867-a026c4f039f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 111,
        title: "Exploration and Discovery",
        image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Journeys that changed the world map.",
        difficulty: "Medium",
        questions: [
          { question: "Who was the first European to sail around the Cape of Good Hope?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Bartolomeu Dias"], correctAnswer: "Bartolomeu Dias", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who is credited with the first circumnavigation of the Earth?", options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"], correctAnswer: "Ferdinand Magellan", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which continent was 'discovered' by Europeans during the Age of Exploration?", options: ["Asia", "Africa", "Australia", "America"], correctAnswer: "America", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first European to reach India by sea?", options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Marco Polo"], correctAnswer: "Vasco da Gama", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the name of the ship Charles Darwin sailed on?", options: ["Santa Maria", "Endeavour", "Beagle", "Mayflower"], correctAnswer: "Beagle", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first person to reach the South Pole?", options: ["Robert Peary", "Roald Amundsen", "Ernest Shackleton", "James Cook"], correctAnswer: "Roald Amundsen", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the primary motivation for many European explorations?", options: ["Scientific research", "Religious conversion", "Gold, God, and Glory", "Leisure travel"], correctAnswer: "Gold, God, and Glory", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which explorer's voyages led to the first European contact with Australia?", options: ["Ferdinand Magellan", "James Cook", "Vasco da Gama", "Christopher Columbus"], correctAnswer: "James Cook", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first person to travel to space?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"], correctAnswer: "Yuri Gagarin", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What invention greatly aided navigation during the Age of Exploration?", options: ["Telescope", "Microscope", "Compass", "Steam engine"], correctAnswer: "Compass", image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 112,
        title: "Ancient Greece and Rome",
        image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The foundations of Western civilization.",
        difficulty: "Medium",
        questions: [
          { question: "Which city-state was known for its military prowess in ancient Greece?", options: ["Athens", "Corinth", "Sparta", "Thebes"], correctAnswer: "Sparta", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was a famous Greek philosopher and student of Plato?", options: ["Socrates", "Aristotle", "Pythagoras", "Heraclitus"], correctAnswer: "Aristotle", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the Roman Colosseum primarily used for?", options: ["Public debates", "Gladiatorial contests", "Religious ceremonies", "Marketplace"], correctAnswer: "Gladiatorial contests", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which war pitted Athens against Sparta?", options: ["Persian Wars", "Peloponnesian War", "Trojan War", "Punic Wars"], correctAnswer: "Peloponnesian War", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the Roman goddess of love and beauty?", options: ["Juno", "Minerva", "Venus", "Diana"], correctAnswer: "Venus", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What famous structure in Rome was a temple to all gods?", options: ["Colosseum", "Pantheon", "Roman Forum", "Circus Maximus"], correctAnswer: "Pantheon", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the legendary founder of Rome?", options: ["Aeneas", "Romulus", "Remus", "Julius Caesar"], correctAnswer: "Romulus", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the primary form of government in the Roman Republic?", options: ["Monarchy", "Democracy", "Republic", "Empire"], correctAnswer: "Republic", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was a famous Greek mathematician known for his geometric theorems?", options: ["Archimedes", "Euclid", "Ptolemy", "Eratosthenes"], correctAnswer: "Euclid", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Olympic Games originated in which civilization?", options: ["Roman", "Egyptian", "Greek", "Persian"], correctAnswer: "Greek", image: "https://images.unsplash.com/photo-1549242967-15174092b740?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 113,
        title: "Revolutionary Periods",
        image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Periods of significant political and social upheaval.",
        difficulty: "Hard",
        questions: [
          { question: "Which revolution saw the overthrow of the Russian monarchy?", options: ["French Revolution", "American Revolution", "October Revolution", "Glorious Revolution"], correctAnswer: "October Revolution", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was a key figure in the American Revolution?", options: ["King George III", "Benedict Arnold", "George Washington", "Alexander Hamilton"], correctAnswer: "George Washington", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The storming of the Bastille is associated with which revolution?", options: ["English Civil War", "French Revolution", "Russian Revolution", "Cuban Revolution"], correctAnswer: "French Revolution", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the leader of the Cuban Revolution?", options: ["Che Guevara", "Fidel Castro", "Raul Castro", "Fulgencio Batista"], correctAnswer: "Fidel Castro", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the 'Reign of Terror' during the French Revolution?", options: ["A period of peace", "A period of mass executions", "An artistic movement", "An economic boom"], correctAnswer: "A period of mass executions", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which revolution primarily aimed to end the Qing Dynasty and establish a republic in China?", options: ["Communist Revolution", "Xinhai Revolution", "Cultural Revolution", "Taiping Rebellion"], correctAnswer: "Xinhai Revolution", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Glorious Revolution took place in which country?", options: ["France", "Russia", "England", "America"], correctAnswer: "England", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=cb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first emperor of France after the French Revolution?", options: ["Louis XVI", "Robespierre", "Napoleon Bonaparte", "Charles X"], correctAnswer: "Napoleon Bonaparte", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the main goal of the Haitian Revolution?", options: ["Trade expansion", "Independence from France and abolition of slavery", "Religious freedom", "Territorial conquest"], correctAnswer: "Independence from France and abolition of slavery", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which revolution led to the establishment of the Soviet Union?", options: ["February Revolution", "Glorious Revolution", "Cuban Revolution", "October Revolution"], correctAnswer: "October Revolution", image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 114,
        title: "Art History",
        image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "From cave paintings to modern masterpieces.",
        difficulty: "Easy",
        questions: [
          { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], correctAnswer: "Leonardo da Vinci", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which artistic movement is characterized by dream-like imagery and irrational juxtapositions?", options: ["Impressionism", "Cubism", "Surrealism", "Realism"], correctAnswer: "Surrealism", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who sculpted 'David'?", options: ["Donatello", "Raphael", "Michelangelo", "Bernini"], correctAnswer: "Michelangelo", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which artist is known for his 'Starry Night' painting?", options: ["Claude Monet", "Pierre-Auguste Renoir", "Vincent van Gogh", "Paul Cézanne"], correctAnswer: "Vincent van Gogh", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What ancient Roman building type influenced much of Western architecture?", options: ["Pyramid", "Ziggurat", "Colosseum", "Basilica"], correctAnswer: "Basilica", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which art form uses small pieces of colored glass or stone to create images?", options: ["Fresco", "Mosaic", "Sculpture", "Calligraphy"], correctAnswer: "Mosaic", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who painted 'The Last Supper'?", options: ["Raphael", "Michelangelo", "Leonardo da Vinci", "Donatello"], correctAnswer: "Leonardo da Vinci", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which artist is considered a pioneer of Cubism?", options: ["Salvador Dalí", "Claude Monet", "Pablo Picasso", "Frida Kahlo"], correctAnswer: "Pablo Picasso", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is Impressionism known for?", options: ["Sharp details and realism", "Bold outlines and flat colors", "Focus on light and fleeting moments", "Abstract shapes and forms"], correctAnswer: "Focus on light and fleeting moments", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Sistine Chapel ceiling was painted by whom?", options: ["Raphael", "Donatello", "Michelangelo", "Titian"], correctAnswer: "Michelangelo", image: "https://images.unsplash.com/photo-1510511459019-5da7094ed668?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 115,
        title: "World Mythology",
        image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Gods, goddesses, and legendary tales from around the globe.",
        difficulty: "Easy",
        questions: [
          { question: "Who is the king of the gods in Greek mythology?", options: ["Poseidon", "Hades", "Zeus", "Apollo"], correctAnswer: "Zeus", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which Norse god wields Mjolnir?", options: ["Odin", "Loki", "Thor", "Heimdall"], correctAnswer: "Thor", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who guarded the entrance to the Underworld in Greek mythology?", options: ["Medusa", "Minotaur", "Cerberus", "Hydra"], correctAnswer: "Cerberus", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the name of the Egyptian god of the afterlife and mummification?", options: ["Ra", "Horus", "Osiris", "Anubis"], correctAnswer: "Osiris", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the Roman goddess of wisdom and warfare?", options: ["Juno", "Venus", "Minerva", "Ceres"], correctAnswer: "Minerva", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which mythical creature is a half-man, half-bull?", options: ["Centaur", "Griffin", "Sphinx", "Minotaur"], correctAnswer: "Minotaur", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the name of the Hindu god, the preserver of the universe?", options: ["Shiva", "Brahma", "Vishnu", "Indra"], correctAnswer: "Vishnu", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "In Japanese mythology, who is the goddess of the sun?", options: ["Tsukuyomi", "Susanoo", "Amaterasu", "Raijin"], correctAnswer: "Amaterasu", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which river in Greek mythology separates the living from the dead?", options: ["Tigris", "Styx", "Nile", "Euphrates"], correctAnswer: "Styx", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What animal is a symbol of wisdom in many mythologies?", options: ["Wolf", "Bear", "Owl", "Eagle"], correctAnswer: "Owl", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 116,
        title: "Historical Figures",
        image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Iconic individuals who shaped the course of history.",
        difficulty: "Medium",
        questions: [
          { question: "Who was a military general who played a crucial role in the American Civil War?", options: ["Robert E. Lee", "Ulysses S. Grant", "Stonewall Jackson", "William Tecumseh Sherman"], correctAnswer: "Ulysses S. Grant", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was known as 'The Sun King'?", options: ["Louis XIII", "Louis XIV", "Louis XV", "Louis XVI"], correctAnswer: "Louis XIV", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first female pharaoh of Egypt?", options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Ankhesenamun"], correctAnswer: "Hatshepsut", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who led the Soviet Union during much of the Cold War?", options: ["Vladimir Lenin", "Mikhail Gorbachev", "Joseph Stalin", "Nikita Khrushchev"], correctAnswer: "Joseph Stalin", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was a key figure in the unification of Germany?", options: ["Otto von Bismarck", "Frederick the Great", "Kaiser Wilhelm II", "Adolf Hitler"], correctAnswer: "Otto von Bismarck", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the first female ruler of Russia?", options: ["Catherine the Great", "Elizabeth I", "Victoria", "Maria Theresa"], correctAnswer: "Catherine the Great", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was a Roman general and statesman, known for conquering Gaul?", options: ["Augustus", "Nero", "Julius Caesar", "Constantine"], correctAnswer: "Julius Caesar", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the founder of the Sikh faith?", options: ["Guru Gobind Singh", "Guru Nanak Dev", "Guru Arjan Dev", "Guru Ram Das"], correctAnswer: "Guru Nanak Dev", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who led the movement for women's suffrage in the United States?", options: ["Harriet Tubman", "Susan B. Anthony", "Eleanor Roosevelt", "Rosa Parks"], correctAnswer: "Susan B. Anthony", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who was the last Empress of China?", options: ["Wu Zetian", "Cixi", "Empress Dowager Longyu", "Consort Zhen"], correctAnswer: "Cixi", image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 117,
        title: "Notable Inventions",
        image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Groundbreaking creations that changed humanity.",
        difficulty: "Easy",
        questions: [
          { question: "Who invented the telephone?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"], correctAnswer: "Alexander Graham Bell", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the first object to be successfully photographed?", options: ["A tree", "A person", "A horse", "A building"], correctAnswer: "A building", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who developed the first successful airplane?", options: ["Henry Ford", "Wright Brothers", "Leonardo da Vinci", "Samuel Morse"], correctAnswer: "Wright Brothers", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What invention led to the widespread use of electricity in homes?", options: ["Steam engine", "Light bulb", "Telegraph", "Printing press"], correctAnswer: "Light bulb", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who invented the modern incandescent light bulb?", options: ["Nikola Tesla", "Alexander Graham Bell", "Thomas Edison", "James Watt"], correctAnswer: "Thomas Edison", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What was the key invention that kickstarted the Information Age?", options: ["Television", "Radio", "Computer", "Telephone"], correctAnswer: "Computer", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who invented the movable type printing press?", options: ["Leonardo da Vinci", "Johannes Gutenberg", "Galileo Galilei", "Isaac Newton"], correctAnswer: "Johannes Gutenberg", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What invention by Eli Whitney greatly impacted cotton production?", options: ["Spinning jenny", "Power loom", "Cotton gin", "Steam engine"], correctAnswer: "Cotton gin", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who developed the first practical internal combustion engine?", options: ["Rudolf Diesel", "Karl Benz", "Nikolaus Otto", "Henry Ford"], correctAnswer: "Nikolaus Otto", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What invention revolutionized communication over long distances with coded messages?", options: ["Telephone", "Radio", "Telegraph", "Television"], correctAnswer: "Telegraph", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 118,
        title: "Classical Music History",
        image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Journey through the eras of classical music.",
        difficulty: "Easy",
        questions: [
          { question: "Who composed the 'Moonlight Sonata'?", options: ["Mozart", "Beethoven", "Bach", "Chopin"], correctAnswer: "Beethoven", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which composer is famous for 'The Four Seasons'?", options: ["Handel", "Vivaldi", "Bach", "Mozart"], correctAnswer: "Vivaldi", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What era of music followed the Baroque period?", options: ["Romantic", "Classical", "Renaissance", "Modern"], correctAnswer: "Classical", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who composed 'Symphony No. 9', also known as the 'Choral Symphony'?", options: ["Mozart", "Bach", "Beethoven", "Haydn"], correctAnswer: "Beethoven", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which composer was a child prodigy and composed over 600 works?", options: ["Bach", "Beethoven", "Mozart", "Chopin"], correctAnswer: "Mozart", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'concerto'?", options: ["A vocal piece", "A large orchestral work", "A solo instrument with orchestral accompaniment", "A dance piece"], correctAnswer: "A solo instrument with orchestral accompaniment", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who is considered the 'Father of the Symphony'?", options: ["Mozart", "Beethoven", "Haydn", "Bach"], correctAnswer: "Haydn", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which period emphasized emotion, individualism, and imagination in music?", options: ["Baroque", "Classical", "Romantic", "Modern"], correctAnswer: "Romantic", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who composed the opera 'The Marriage of Figaro'?", options: ["Verdi", "Puccini", "Mozart", "Wagner"], correctAnswer: "Mozart", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What instrument is Chopin primarily known for composing for?", options: ["Violin", "Flute", "Piano", "Cello"], correctAnswer: "Piano", image: "https://images.unsplash.com/photo-1507679708233-a6142a5d24f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 119,
        title: "Archaeology",
        image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Unearthing secrets of the past.",
        difficulty: "Medium",
        questions: [
          { question: "What is the study of human history and prehistory through the excavation of sites?", options: ["Geology", "Paleontology", "Archaeology", "Anthropology"], correctAnswer: "Archaeology", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which famous Egyptian pharaoh's tomb was discovered largely intact by Howard Carter?", options: ["Ramesses II", "Akhenaten", "Tutankhamun", "Thutmose III"], correctAnswer: "Tutankhamun", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What Roman city was buried by the eruption of Mount Vesuvius?", options: ["Rome", "Herculaneum", "Pompeii", "Ostia"], correctAnswer: "Pompeii", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the Rosetta Stone important for?", options: ["Predicting the future", "Translating Egyptian hieroglyphs", "Mapping the stars", "Creating new languages"], correctAnswer: "Translating Egyptian hieroglyphs", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which ancient wonder was located in Ephesus and destroyed by arson?", options: ["Pyramids of Giza", "Hanging Gardens of Babylon", "Temple of Artemis", "Colossus of Rhodes"], correctAnswer: "Temple of Artemis", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What method do archaeologists use to determine the age of organic materials?", options: ["Dendrochronology", "Thermoluminescence", "Carbon-14 dating", "Potassium-argon dating"], correctAnswer: "Carbon-14 dating", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The city of Troy is famously associated with which mythological war?", options: ["Peloponnesian War", "Punic Wars", "Trojan War", "Persian Wars"], correctAnswer: "Trojan War", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What are 'megaliths'?", options: ["Small clay tablets", "Large stone structures", "Ancient tools", "Buried cities"], correctAnswer: "Large stone structures", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The Terracotta Army was discovered in the tomb of which Chinese emperor?", options: ["Qin Shi Huang", "Han Wudi", "Tang Taizong", "Emperor Jing"], correctAnswer: "Qin Shi Huang", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What do archaeologists call the layer of soil and artifacts that represents a period of human occupation?", options: ["Stratum", "Sediment", "Fossil layer", "Bedrock"], correctAnswer: "Stratum", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      }
    ]
  },
  {
    id: 'science',
    category: "Science",
    // No image for the category itself
    topics: [
      {
        id: 201,
        title: "Biology Basics",
        image: "https://images.unsplash.com/photo-1625076295536-a36746f3325c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Fundamental concepts in the study of life.",
        difficulty: "Easy",
        questions: [
          {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
            correctAnswer: "Mitochondria",
            image: "https://images.unsplash.com/photo-1625076295536-a36746f3325c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What gas do plants primarily absorb from the atmosphere for photosynthesis?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correctAnswer: "Carbon Dioxide",
            image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the largest organ in the human body?",
            options: ["Heart", "Brain", "Skin", "Liver"],
            correctAnswer: "Skin",
            image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "Which animal lays the largest eggs?",
            options: ["Chicken", "Eagle", "Ostrich", "Crocodile"],
            correctAnswer: "Ostrich",
            image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the process by which plants make their own food?",
            options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
            correctAnswer: "Photosynthesis",
            image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the basic unit of heredity?",
            options: ["Cell", "Organ", "Gene", "Tissue"],
            correctAnswer: "Gene",
            image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "Which of these is a reptile?",
            options: ["Frog", "Salamander", "Snake", "Fish"],
            correctAnswer: "Snake",
            image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the name of the two main types of nucleic acids?",
            options: ["Proteins and Lipids", "Carbohydrates and Fats", "DNA and RNA", "Vitamins and Minerals"],
            correctAnswer: "DNA and RNA",
            image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "Which gas do humans exhale?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"],
            correctAnswer: "Carbon Dioxide",
            image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the function of red blood cells?",
            options: ["Fighting infections", "Clotting blood", "Carrying oxygen", "Producing hormones"],
            correctAnswer: "Carrying oxygen",
            image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          }
        ]
      },
      {
        id: 202,
        title: "Physics Fundamentals",
        image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Exploring the basic laws of the universe.",
        difficulty: "Medium",
        questions: [
          {
            question: "What is the unit of force?",
            options: ["Joule", "Watt", "Newton", "Volt"],
            correctAnswer: "Newton",
            image: "https://images.unsplash.com/photo-1533748290074-6e695d73c242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the law that states energy cannot be created or destroyed?",
            options: ["Newton's Law", "Ohm's Law", "Law of Conservation of Energy", "Hooke's Law"],
            correctAnswer: "Law of Conservation of Energy",
            image: "https://images.unsplash.com/photo-1574224095499-d42188001e74?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "1,000,000 km/s", "Less than the speed of sound"],
            correctAnswer: "300,000 km/s",
            image: "https://images.unsplash.com/photo-1558913926-d9223126f947?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "Which of the following is a scalar quantity?",
            options: ["Velocity", "Force", "Mass", "Acceleration"],
            correctAnswer: "Mass",
            image: "https://images.unsplash.com/photo-1629853923308-412702a0a256?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is Ohm's Law?",
            options: ["V = IR", "E = mc²", "F = ma", "P = IV"],
            correctAnswer: "V = IR",
            image: "https://images.unsplash.com/photo-1625076295536-a36746f3325c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What type of energy is stored in a stretched spring?",
            options: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"],
            correctAnswer: "Potential energy",
            image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "Which famous scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"],
            correctAnswer: "Albert Einstein",
            image: "https://images.unsplash.com/photo-1579737299583-b778749a37ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the force that pulls objects towards the center of the Earth?",
            options: ["Friction", "Tension", "Gravity", "Magnetism"],
            correctAnswer: "Gravity",
            image: "https://images.unsplash.com/photo-1520692795861-591a6d713a69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What are the three states of matter?",
            options: ["Hot, Cold, Warm", "Solid, Liquid, Gas", "Rough, Smooth, Textured", "Light, Sound, Heat"],
            correctAnswer: "Solid, Liquid, Gas",
            image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          },
          {
            question: "What is the process of a liquid turning into a gas?",
            options: ["Melting", "Freezing", "Condensation", "Evaporation"],
            correctAnswer: "Evaporation",
            image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D"
          }
        ]
      },
      // --- Add 8 more Science topics here, each with 10 questions and images for each question ---
      {
        id: 203,
        title: "Chemistry Concepts",
        image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Explore the elements and reactions that make up our world.",
        difficulty: "Medium",
        questions: [
          { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "N2"], correctAnswer: "H2O", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correctAnswer: "Nitrogen", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the pH of a neutral solution?", options: ["0", "7", "14", "1"], correctAnswer: "7", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which element has the atomic number 1?", options: ["Helium", "Oxygen", "Hydrogen", "Carbon"], correctAnswer: "Hydrogen", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of a solid turning directly into a gas?", options: ["Melting", "Evaporation", "Sublimation", "Condensation"], correctAnswer: "Sublimation", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which type of bond involves the sharing of electrons?", options: ["Ionic", "Metallic", "Hydrogen", "Covalent"], correctAnswer: "Covalent", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the name of the vertical columns in the periodic table?", options: ["Periods", "Blocks", "Groups", "Series"], correctAnswer: "Groups", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which gas is responsible for the 'pop' sound when a champagne bottle is opened?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"], correctAnswer: "Carbon Dioxide", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the unit of electric current?", options: ["Volt", "Ohm", "Ampere", "Watt"], correctAnswer: "Ampere", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of breaking down a compound using electricity?", options: ["Combustion", "Hydrolysis", "Electrolysis", "Oxidation"], correctAnswer: "Electrolysis", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 204,
        title: "Astronomy & Space",
        image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The wonders of the cosmos and beyond.",
        difficulty: "Easy",
        questions: [
          { question: "What is the closest star to Earth?", options: ["Alpha Centauri", "Proxima Centauri", "Sun", "Sirius"], correctAnswer: "Sun", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which planet is known as the 'Red Planet'?", options: ["Jupiter", "Mars", "Venus", "Saturn"], correctAnswer: "Mars", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'light-year' a measure of?", options: ["Time", "Speed", "Distance", "Brightness"], correctAnswer: "Distance", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which galaxy is our solar system a part of?", options: ["Andromeda", "Triangulum", "Messier 81", "Milky Way"], correctAnswer: "Milky Way", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the name of the first artificial satellite launched into space?", options: ["Explorer 1", "Sputnik 1", "Vanguard 1", "Luna 1"], correctAnswer: "Sputnik 1", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which planet is known for its prominent ring system?", options: ["Jupiter", "Uranus", "Neptune", "Saturn"], correctAnswer: "Saturn", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What celestial body is a 'shooting star'?", options: ["Star", "Comet", "Meteor", "Planet"], correctAnswer: "Meteor", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What causes an eclipse?", options: ["Moon's rotation", "Earth's rotation", "Alignment of celestial bodies", "Solar flares"], correctAnswer: "Alignment of celestial bodies", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which gas makes up the majority of the Sun?", options: ["Oxygen", "Helium", "Hydrogen", "Carbon"], correctAnswer: "Hydrogen", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the primary mission of the Hubble Space Telescope?", options: ["Observing distant galaxies", "Studying black holes", "Mapping the Moon", "Exploring Mars"], correctAnswer: "Observing distant galaxies", image: "https://images.unsplash.com/photo-1506318116544-b0521e649d21?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 205,
        title: "Environmental Science",
        image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Understanding our planet and its challenges.",
        difficulty: "Medium",
        questions: [
          { question: "What is the primary cause of global warming?", options: ["Volcanic eruptions", "Deforestation", "Greenhouse gas emissions", "Ocean currents"], correctAnswer: "Greenhouse gas emissions", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these is a renewable energy source?", options: ["Coal", "Natural Gas", "Solar Power", "Nuclear Power"], correctAnswer: "Solar Power", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is biodiversity?", options: ["Variety of weather patterns", "Variety of plant and animal life", "Variety of rocks", "Variety of languages"], correctAnswer: "Variety of plant and animal life", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of converting waste materials into new materials and objects?", options: ["Incineration", "Landfilling", "Recycling", "Composting"], correctAnswer: "Recycling", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which gas is depleted by CFCs, leading to increased UV radiation?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Ozone"], correctAnswer: "Ozone", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is an ecosystem?", options: ["A group of animals", "A community of living organisms interacting with their non-living environment", "A type of plant", "A geological formation"], correctAnswer: "A community of living organisms interacting with their non-living environment", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which term refers to the gradual increase in the average temperature of Earth's atmosphere?", options: ["Ice Age", "Climate Change", "El Niño", "Monsoon"], correctAnswer: "Climate Change", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process by which water vapor in the air turns into liquid water?", options: ["Evaporation", "Precipitation", "Condensation", "Transpiration"], correctAnswer: "Condensation", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these is a major cause of deforestation?", options: ["Volcanic eruptions", "Forest fires", "Agriculture and logging", "Earthquakes"], correctAnswer: "Agriculture and logging", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the study of how living organisms interact with each other and their environment?", options: ["Geology", "Botany", "Ecology", "Zoology"], correctAnswer: "Ecology", image: "https://images.unsplash.com/photo-1547840134-58e1781b0a8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 206,
        title: "Human Anatomy",
        image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Explore the intricate systems of the human body.",
        difficulty: "Easy",
        questions: [
          { question: "What is the main function of the heart?", options: ["Digesting food", "Pumping blood", "Filtering waste", "Producing hormones"], correctAnswer: "Pumping blood", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which organ produces insulin?", options: ["Liver", "Stomach", "Pancreas", "Kidney"], correctAnswer: "Pancreas", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "How many bones are in the adult human body?", options: ["106", "206", "306", "406"], correctAnswer: "206", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the largest bone in the human body?", options: ["Radius", "Tibia", "Femur", "Humerus"], correctAnswer: "Femur", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], correctAnswer: "Cerebellum", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What are the tiny air sacs in the lungs called?", options: ["Bronchi", "Bronchioles", "Alveoli", "Trachea"], correctAnswer: "Alveoli", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which blood type is considered the universal donor?", options: ["A", "B", "AB", "O-negative"], correctAnswer: "O-negative", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the longest part of the digestive system?", options: ["Stomach", "Large intestine", "Small intestine", "Esophagus"], correctAnswer: "Small intestine", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which organ detoxifies harmful substances in the body?", options: ["Kidneys", "Lungs", "Liver", "Spleen"], correctAnswer: "Liver", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the primary function of the kidneys?", options: ["Pumping blood", "Filtering waste from blood", "Digesting food", "Producing hormones"], correctAnswer: "Filtering waste from blood", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 207,
        title: "Geology & Earth Science",
        image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Discover the forces that shape our planet.",
        difficulty: "Medium",
        questions: [
          { question: "What are the three main types of rocks?", options: ["Soft, Hard, Medium", "Sedimentary, Igneous, Metamorphic", "Rough, Smooth, Polished", "Volcanic, Oceanic, Continental"], correctAnswer: "Sedimentary, Igneous, Metamorphic", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What causes earthquakes?", options: ["Volcanic eruptions", "Movement of tectonic plates", "Strong winds", "Heavy rainfall"], correctAnswer: "Movement of tectonic plates", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process by which rocks are broken down into smaller pieces?", options: ["Erosion", "Deposition", "Weathering", "Compaction"], correctAnswer: "Weathering", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which layer of Earth is composed mainly of liquid iron and nickel?", options: ["Crust", "Mantle", "Outer Core", "Inner Core"], correctAnswer: "Outer Core", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the name for the supercontinent that existed millions of years ago?", options: ["Gondwana", "Laurasia", "Pangea", "Columbia"], correctAnswer: "Pangea", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'tsunami'?", options: ["A type of volcano", "A large ocean wave caused by undersea earthquakes", "A fast river current", "A type of storm"], correctAnswer: "A large ocean wave caused by undersea earthquakes", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the most common mineral in Earth's crust?", options: ["Quartz", "Feldspar", "Mica", "Calcite"], correctAnswer: "Feldspar", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which scale is used to measure the intensity of an earthquake?", options: ["Celsius scale", "Richter scale", "Beaufort scale", "Mohs scale"], correctAnswer: "Richter scale", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of hot material rising and cool material sinking in Earth's mantle?", options: ["Conduction", "Radiation", "Convection", "Subduction"], correctAnswer: "Convection", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'fossil'?", options: ["A type of rock", "Preserved remains or traces of ancient organisms", "A mineral deposit", "A volcanic ash formation"], correctAnswer: "Preserved remains or traces of ancient organisms", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 208,
        title: "Computer Science",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The logic and technology behind computing.",
        difficulty: "Medium",
        questions: [
          { question: "What does 'CPU' stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Power Unit", "Control Program Utility"], correctAnswer: "Central Processing Unit", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the language used for web page styling?", options: ["HTML", "JavaScript", "CSS", "Python"], correctAnswer: "CSS", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is an algorithm?", options: ["A type of computer virus", "A set of rules or instructions for solving a problem", "A hardware component", "A programming error"], correctAnswer: "A set of rules or instructions for solving a problem", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the primary function of an operating system?", options: ["Playing games", "Managing computer hardware and software resources", "Browse the internet", "Creating documents"], correctAnswer: "Managing computer hardware and software resources", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "High-Tech Technical Program", "Hyperlink Text Transfer Page", "Home Tool Transfer Protocol"], correctAnswer: "HyperText Transfer Protocol", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which company developed the Python programming language?", options: ["Microsoft", "Google", "Guido van Rossum", "Apple"], correctAnswer: "Guido van Rossum", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'RAM' used for in a computer?", options: ["Long-term storage", "Temporary data storage for active programs", "Graphics processing", "Networking"], correctAnswer: "Temporary data storage for active programs", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'firewall' in computer security?", options: ["A type of virus", "A network security system", "A programming tool", "A hardware component for cooling"], correctAnswer: "A network security system", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What does 'URL' stand for?", options: ["Universal Resource Locator", "Uniform Remote Link", "Unified Resource Log", "User Registration Login"], correctAnswer: "Universal Resource Locator", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these is NOT a programming language?", options: ["Java", "C++", "HTML", "Ruby"], correctAnswer: "HTML", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 209,
        title: "Mathematics Basics",
        image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Fundamental concepts of numbers, shapes, and patterns.",
        difficulty: "Easy",
        questions: [
          { question: "What is the value of Pi (π) to two decimal places?", options: ["3.10", "3.14", "3.16", "3.18"], correctAnswer: "3.14", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the sum of angles in a triangle?", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], correctAnswer: "180 degrees", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What type of number is 7?", options: ["Even", "Composite", "Prime", "Decimal"], correctAnswer: "Prime", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], correctAnswer: "8", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "How many sides does a hexagon have?", options: ["5", "6", "7", "8"], correctAnswer: "6", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the largest two-digit prime number?", options: ["91", "93", "97", "99"], correctAnswer: "97", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the term for a number that can only be divided by 1 and itself?", options: ["Even number", "Odd number", "Composite number", "Prime number"], correctAnswer: "Prime number", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the common ratio in the geometric sequence 2, 4, 8, 16...?", options: ["1", "2", "3", "4"], correctAnswer: "2", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "How many centimeters are in a meter?", options: ["10", "100", "1000", "10000"], correctAnswer: "100", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the perimeter of a square with a side length of 5 units?", options: ["10 units", "15 units", "20 units", "25 units"], correctAnswer: "20 units", image: "https://images.unsplash.com/photo-1563288225-82782b542e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 210,
        title: "Robotics & AI",
        image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The cutting edge of intelligent machines and automation.",
        difficulty: "Hard",
        questions: [
          { question: "What does 'AI' stand for?", options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Interfacing", "Algorithmic Iteration"], correctAnswer: "Artificial Intelligence", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which scientist is considered the 'father of AI'?", options: ["Alan Turing", "John McCarthy", "Marvin Minsky", "Geoffrey Hinton"], correctAnswer: "John McCarthy", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'robot' in a general sense?", options: ["A fictional character", "A machine designed to carry out a complex series of actions automatically", "A type of computer program", "A remote-controlled toy"], correctAnswer: "A machine designed to carry out a complex series of actions automatically", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which field of AI focuses on enabling computers to 'learn' from data without explicit programming?", options: ["Robotics", "Natural Language Processing", "Computer Vision", "Machine Learning"], correctAnswer: "Machine Learning", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What are 'sensors' used for in robotics?", options: ["Providing power", "Enabling movement", "Gathering information about the environment", "Storing data"], correctAnswer: "Gathering information about the environment", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'Deep Learning' a subset of?", options: ["Traditional programming", "Artificial General Intelligence", "Machine Learning", "Data Mining"], correctAnswer: "Machine Learning", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which famous robot was featured in the movie 'Star Wars'?", options: ["C-3PO", "Optimus Prime", "HAL 9000", "Bumblebee"], correctAnswer: "C-3PO", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What does 'NLP' stand for in AI?", options: ["Neural Language Processing", "Natural Logic Programming", "Network Learning Protocol", "Natural Language Processing"], correctAnswer: "Natural Language Processing", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these is a famous AI system known for playing chess?", options: ["Watson", "Deep Blue", "AlphaGo", "Siri"], correctAnswer: "Deep Blue", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'Computer Vision'?", options: ["A type of screen", "The field that enables computers to 'see' and interpret images/videos", "A graphics design software", "A virtual reality headset"], correctAnswer: "The field that enables computers to 'see' and interpret images/videos", image: "https://images.unsplash.com/photo-1596765793444-59e51c8b3e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 211,
        title: "Thermodynamics",
        image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The study of heat and its relation to other forms of energy.",
        difficulty: "Hard",
        questions: [
          { question: "What is the First Law of Thermodynamics also known as?", options: ["Law of Conservation of Mass", "Law of Conservation of Energy", "Law of Entropy", "Law of Ideal Gases"], correctAnswer: "Law of Conservation of Energy", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'entropy' a measure of?", options: ["Temperature", "Order or disorder", "Pressure", "Volume"], correctAnswer: "Order or disorder", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "At what temperature does water boil at standard atmospheric pressure in Celsius?", options: ["0°C", "50°C", "100°C", "212°C"], correctAnswer: "100°C", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the transfer of heat through direct contact?", options: ["Convection", "Radiation", "Conduction", "Insulation"], correctAnswer: "Conduction", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which law states that it is impossible to reach absolute zero?", options: ["First Law", "Second Law", "Third Law", "Zeroth Law"], correctAnswer: "Third Law", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the unit of heat energy?", options: ["Watt", "Newton", "Joule", "Volt"], correctAnswer: "Joule", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "The process of a gas changing directly into a solid is called what?", options: ["Melting", "Freezing", "Deposition", "Sublimation"], correctAnswer: "Deposition", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the definition of a 'heat engine'?", options: ["A device that generates heat", "A device that converts thermal energy into mechanical work", "A device that cools substances", "A device that measures temperature"], correctAnswer: "A device that converts thermal energy into mechanical work", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'absolute zero'?", options: ["The freezing point of water", "The boiling point of water", "The lowest possible temperature", "The melting point of ice"], correctAnswer: "The lowest possible temperature", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which type of heat transfer occurs through electromagnetic waves?", options: ["Conduction", "Convection", "Radiation", "Insulation"], correctAnswer: "Radiation", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 212,
        title: "Genetics",
        image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The study of heredity and variation.",
        difficulty: "Hard",
        questions: [
          { question: "What is the basic unit of heredity?", options: ["Cell", "Molecule", "Gene", "Organ"], correctAnswer: "Gene", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who is considered the 'Father of Genetics'?", options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"], correctAnswer: "Gregor Mendel", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process by which DNA makes a copy of itself?", options: ["Transcription", "Translation", "Replication", "Mutation"], correctAnswer: "Replication", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What are the building blocks of proteins?", options: ["Nucleotides", "Monosaccharides", "Fatty acids", "Amino acids"], correctAnswer: "Amino acids", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which type of RNA carries genetic information from DNA to the ribosome?", options: ["tRNA", "rRNA", "mRNA", "sRNA"], correctAnswer: "mRNA", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'mutation' in genetics?", options: ["A common trait", "A change in the DNA sequence", "A type of disease", "A genetic test"], correctAnswer: "A change in the DNA sequence", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "How many chromosomes do normal human cells have?", options: ["23", "46", "23 pairs", "46 pairs"], correctAnswer: "46", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the term for an organism's observable characteristics resulting from the interaction of its genotype with the environment?", options: ["Genotype", "Allele", "Phenotype", "Chromosome"], correctAnswer: "Phenotype", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which technique is used to create many copies of a specific DNA segment?", options: ["Gel electrophoresis", "DNA sequencing", "Polymerase Chain Reaction (PCR)", "Gene editing"], correctAnswer: "Polymerase Chain Reaction (PCR)", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of gene expression called when DNA is copied into RNA?", options: ["Replication", "Translation", "Transcription", "Mutation"], correctAnswer: "Transcription", image: "https://images.unsplash.com/photo-1549490349-0158d697843b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 213,
        title: "Quantum Physics",
        image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Exploring the bizarre world of subatomic particles.",
        difficulty: "Hard",
        questions: [
          { question: "What is a 'quantum'?", options: ["A large quantity", "A discrete packet of energy", "A type of wave", "A subatomic particle"], correctAnswer: "A discrete packet of energy", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who developed the theory of quantum mechanics?", options: ["Albert Einstein", "Isaac Newton", "Max Planck", "Niels Bohr"], correctAnswer: "Max Planck", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the Heisenberg Uncertainty Principle?", options: ["You can't know a particle's position and momentum perfectly at the same time", "Energy is always conserved", "Light acts as both a wave and a particle", "Mass can be converted to energy"], correctAnswer: "You can't know a particle's position and momentum perfectly at the same time", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these particles is a boson?", options: ["Electron", "Proton", "Neutron", "Photon"], correctAnswer: "Photon", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'quantum entanglement'?", options: ["Two particles becoming linked and sharing the same fate, regardless of distance", "A type of quantum computing error", "A state of matter", "A theoretical particle"], correctAnswer: "Two particles becoming linked and sharing the same fate, regardless of distance", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which experiment demonstrated the wave-particle duality of light?", options: ["Michelson-Morley Experiment", "Rutherford's Gold Foil Experiment", "Young's Double-Slit Experiment", "Millikan's Oil Drop Experiment"], correctAnswer: "Young's Double-Slit Experiment", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'qubit' in quantum computing?", options: ["A classical bit", "A quantum bit that can exist in multiple states simultaneously", "A type of computer chip", "A programming language"], correctAnswer: "A quantum bit that can exist in multiple states simultaneously", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What does the 'Schrödinger's Cat' thought experiment illustrate?", options: ["The nature of light", "The concept of quantum superposition", "The stability of atoms", "The force of gravity"], correctAnswer: "The concept of quantum superposition", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which particle mediates the electromagnetic force?", options: ["Graviton", "Gluon", "W boson", "Photon"], correctAnswer: "Photon", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the Standard Model of Particle Physics?", options: ["A theory of gravity", "A theory describing the fundamental particles and forces", "A model of the universe's expansion", "A theory of dark matter"], correctAnswer: "A theory describing the fundamental particles and forces", image: "https://images.unsplash.com/photo-1521742999026-b9b5f5e8c1e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 214,
        title: "Medical Science",
        image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Advances in health, disease, and treatment.",
        difficulty: "Medium",
        questions: [
          { question: "Who discovered penicillin?", options: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Jonas Salk"], correctAnswer: "Alexander Fleming", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the universal symbol for medicine?", options: ["Caduceus", "Rod of Asclepius", "Star of Life", "Red Cross"], correctAnswer: "Rod of Asclepius", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which vaccine eradicated smallpox?", options: ["Polio vaccine", "MMR vaccine", "Smallpox vaccine", "Tetanus vaccine"], correctAnswer: "Smallpox vaccine", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What does 'MRI' stand for?", options: ["Medical Radiation Imaging", "Magnetic Resonance Imaging", "Molecular Resonance Interaction", "Mechanical Respiration Indicator"], correctAnswer: "Magnetic Resonance Imaging", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which vitamin is essential for blood clotting?", options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin A"], correctAnswer: "Vitamin K", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the study of diseases?", options: ["Anatomy", "Physiology", "Pathology", "Immunology"], correctAnswer: "Pathology", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Who is known for developing the polio vaccine?", options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Jonas Salk"], correctAnswer: "Jonas Salk", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the main function of red blood cells?", options: ["Fight infection", "Clot blood", "Carry oxygen", "Produce antibodies"], correctAnswer: "Carry oxygen", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which system in the body is responsible for fighting off diseases?", options: ["Nervous system", "Digestive system", "Immune system", "Circulatory system"], correctAnswer: "Immune system", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'vaccine'?", options: ["A type of antibiotic", "A medicine to cure infections", "A biological preparation that provides active acquired immunity to a particular infectious disease", "A pain reliever"], correctAnswer: "A biological preparation that provides active acquired immunity to a particular infectious disease", image: "https://images.unsplash.com/photo-1621303251786-db9f52136e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 215,
        title: "Ecology & Conservation",
        image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Protecting our natural world and its inhabitants.",
        difficulty: "Medium",
        questions: [
          { question: "What is an endangered species?", options: ["A species that is thriving", "A species at risk of extinction", "A species that is newly discovered", "A species that can only live in captivity"], correctAnswer: "A species at risk of extinction", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the term for the variety of life on Earth?", options: ["Ecosystem", "Biodiversity", "Habitat", "Population"], correctAnswer: "Biodiversity", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the primary gas responsible for the greenhouse effect?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Methane"], correctAnswer: "Carbon Dioxide", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'deforestation'?", options: ["Planting new trees", "Cutting down forests", "Protecting national parks", "Restoring wetlands"], correctAnswer: "Cutting down forests", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which layer of the atmosphere protects Earth from harmful UV radiation?", options: ["Troposphere", "Stratosphere (Ozone Layer)", "Mesosphere", "Thermosphere"], correctAnswer: "Stratosphere (Ozone Layer)", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'food chain'?", options: ["A list of popular foods", "A sequence showing how living things get food from other organisms", "A type of restaurant", "A series of cooking steps"], correctAnswer: "A sequence showing how living things get food from other organisms", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these is a non-renewable energy source?", options: ["Wind power", "Solar power", "Natural gas", "Geothermal energy"], correctAnswer: "Natural gas", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of water soaking into the ground?", options: ["Runoff", "Evaporation", "Precipitation", "Infiltration"], correctAnswer: "Infiltration", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is 'carbon footprint'?", options: ["A type of pollution", "The amount of carbon dioxide released into the atmosphere due to one's activities", "A measurement of shoe size", "A natural geological formation"], correctAnswer: "The amount of carbon dioxide released into the atmosphere due to one's activities", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the goal of conservation?", options: ["Exploiting natural resources", "Ignoring environmental issues", "Protecting and preserving natural resources and wildlife", "Building more factories"], correctAnswer: "Protecting and preserving natural resources and wildlife", image: "https://images.unsplash.com/photo-1517672651691-c4d98256d30a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 216,
        title: "Neuroscience",
        image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "Unraveling the mysteries of the brain and nervous system.",
        difficulty: "Hard",
        questions: [
          { question: "What is the basic functional unit of the nervous system?", options: ["Neuron", "Muscle cell", "Blood cell", "Skin cell"], correctAnswer: "Neuron", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which part of the brain is responsible for memory and learning?", options: ["Cerebellum", "Brainstem", "Hippocampus", "Thalamus"], correctAnswer: "Hippocampus", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What are the chemical messengers in the brain called?", options: ["Hormones", "Enzymes", "Neurotransmitters", "Vitamins"], correctAnswer: "Neurotransmitters", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which lobe of the brain is primarily responsible for vision?", options: ["Frontal lobe", "Parietal lobe", "Temporal lobe", "Occipital lobe"], correctAnswer: "Occipital lobe", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the protective sheath around some nerve fibers?", options: ["Axon", "Dendrite", "Synapse", "Myelin sheath"], correctAnswer: "Myelin sheath", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which part of the brain controls involuntary actions like breathing and heart rate?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"], correctAnswer: "Brainstem", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the junction between two neurons called?", options: ["Axon", "Dendrite", "Synapse", "Soma"], correctAnswer: "Synapse", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which disease is characterized by progressive memory loss and cognitive decline?", options: ["Parkinson's disease", "Multiple Sclerosis", "Alzheimer's disease", "Epilepsy"], correctAnswer: "Alzheimer's disease", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What are the two main divisions of the nervous system?", options: ["Somatic and Autonomic", "Sensory and Motor", "Central and Peripheral", "Sympathetic and Parasympathetic"], correctAnswer: "Central and Peripheral", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the outermost layer of the brain called?", options: ["Cerebral cortex", "Thalamus", "Hypothalamus", "Amygdala"], correctAnswer: "Cerebral cortex", image: "https://images.unsplash.com/photo-1620247659610-c11649b4c0e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 217,
        title: "Materials Science",
        image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The study of the properties and applications of materials.",
        difficulty: "Hard",
        questions: [
          { question: "Which material is known for being the hardest natural substance?", options: ["Steel", "Titanium", "Diamond", "Graphite"], correctAnswer: "Diamond", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'polymer'?", options: ["A type of metal", "A large molecule made up of repeating smaller units", "A chemical element", "A form of energy"], correctAnswer: "A large molecule made up of repeating smaller units", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which metal is liquid at room temperature?", options: ["Iron", "Lead", "Mercury", "Aluminum"], correctAnswer: "Mercury", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is a 'superconductor'?", options: ["A material with high electrical resistance", "A material that conducts electricity with zero resistance below a certain temperature", "A type of insulator", "A material that emits light"], correctAnswer: "A material that conducts electricity with zero resistance below a certain temperature", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which ceramic material is commonly used in dental fillings?", options: ["Porcelain", "Zirconia", "Alumina", "Silica"], correctAnswer: "Porcelain", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is an 'alloy'?", options: ["A pure element", "A mixture of two or more metals or a metal and a non-metal", "A type of plastic", "A natural rock formation"], correctAnswer: "A mixture of two or more metals or a metal and a non-metal", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which type of carbon is used in pencils?", options: ["Diamond", "Graphene", "Fullerene", "Graphite"], correctAnswer: "Graphite", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the primary component of glass?", options: ["Limestone", "Sand (silica)", "Clay", "Feldspar"], correctAnswer: "Sand (silica)", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which material is commonly used for electrical wiring due to its high conductivity?", options: ["Iron", "Aluminum", "Copper", "Silver"], correctAnswer: "Copper", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What makes a material 'biocompatible'?", options: ["It's easily recyclable", "It doesn't cause a toxic or inflammatory response in living tissue", "It's very strong", "It's conductive"], correctAnswer: "It doesn't cause a toxic or inflammatory response in living tissue", image: "https://images.unsplash.com/photo-1579450361288-750d75a3c9e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
        ]
      },
      {
        id: 218,
        title: "Food Science",
        image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D",
        description: "The science behind what we eat and drink.",
        difficulty: "Easy",
        questions: [
          { question: "What is the main carbohydrate found in milk?", options: ["Sucrose", "Fructose", "Lactose", "Glucose"], correctAnswer: "Lactose", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which nutrient is primarily responsible for building and repairing tissues?", options: ["Carbohydrates", "Fats", "Vitamins", "Proteins"], correctAnswer: "Proteins", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is fermentation?", options: ["Cooking food at high temperatures", "The chemical breakdown of a substance by bacteria, yeasts, or other microorganisms", "Freezing food to preserve it", "Adding artificial flavors to food"], correctAnswer: "The chemical breakdown of a substance by bacteria, yeasts, or other microorganisms", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which vitamin is synthesized in the skin upon exposure to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correctAnswer: "Vitamin D", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the process of heating a liquid to kill bacteria?", options: ["Boiling", "Freezing", "Pasteurization", "Filtration"], correctAnswer: "Pasteurization", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which type of fat is generally considered healthier?", options: ["Saturated fat", "Trans fat", "Unsaturated fat", "Hydrogenated fat"], correctAnswer: "Unsaturated fat", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "What is the main function of carbohydrates in the body?", options: ["Building muscles", "Providing energy", "Storing genetic information", "Regulating body temperature"], correctAnswer: "Providing energy", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" },
          { question: "Which of these is a trace mineral essential for oxygen transport in blood?", options: ["Calcium", "Potassium", "Iron", "Sodium"], correctAnswer: "Iron", image: "https://images.unsplash.com/photo-1600880292203-d14362b9f3a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB4MHxwaG90by1wYWdlfHx8fGVufDB4fHx8fA%3D%3D" }
          
        ]
      },
    ]
  }
];