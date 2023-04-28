

let dayOfWeek = document.getElementById("nameInput").toLowercase

function greet() {
          // console.log(dayOfWeek.value)
          switch (dayOfWeek.value) {
                    case "monday":
                              alert("Happy Monday! Wishing you a productive and fulfilling start to your week. Remember, each day is a new opportunity to make progress towards your goals and aspirations. Stay focused, stay positive, and take action towards what you want to achieve. Let's make this week great!");
                              break;
                    case "tuesday":
                              alert("Hello and happy Tuesday! I hope your day is off to a great start. If not, remember that you have the power to turn it around. Take a deep breath, set some goals for the day, and tackle them one by one. Don't be afraid to ask for help or take breaks when you need them. You got this! Keep pushing forward and making progress towards your dreams. Have a wonderful day!.");
                              break;
                    case "wednesday":
                              alert("Happy Wednesday! We're halfway through the week, and that's something to celebrate. Keep up the momentum and focus on your goals. Don't let distractions or setbacks get in the way of your progress. Remember, you are capable of achieving great things. Take some time today to reflect on your accomplishments and give yourself a pat on the back. Keep pushing forward and making each day count. Have a wonderful day!");
                              break;
                    case "thursday":
                              alert("Hello and happy Thursday! You're almost there, just one more day until the weekend. Keep pushing through and stay focused on your goals. Take some time to appreciate how far you've come this week and the progress you've made. If you're feeling overwhelmed or stressed, take a step back and practice some self-care. Remember, taking care of yourself is just as important as taking care of your responsibilities. Keep up the great work and finish the week strong!");
                              break;
                    case "friday":
                              alert("Happy Friday! You made it to the end of the week, congratulations! Take a moment to reflect on all the hard work and accomplishments from the past few days. You deserve to feel proud of yourself. Finish off the week strong and tie up any loose ends before the weekend. Make sure to take some time to relax and recharge over the next couple of days. You deserve it! Remember, Monday is just around the corner, and a new week means new opportunities. Keep pushing forward and chasing your dreams. Have a fantastic weekend!.");
                              break;
                    case "saturday":
                             alert("Hello and happy Saturday! I hope you're enjoying a relaxing and rejuvenating weekend. Take some time today to do something that makes you happy and brings you joy. Whether it's spending time with loved ones, pursuing a hobby, or simply taking a nap, make sure to prioritize your well-being. Use today to recharge your batteries and get ready for the week ahead. Remember, taking care of yourself is key to achieving success and happiness. Have a wonderful day!.");
                              break;
                    case "sunday":
                             alert("IHappy Sunday! It's a new week tomorrow, and that means new opportunities to chase your dreams and reach your goals. Take some time today to reflect on the past week and set some intentions for the week ahead. What did you accomplish this week, and what can you do better next week? Use this time to recharge and prepare for the challenges and opportunities that lie ahead. Remember, you are capable of achieving great things, and with focus and determination, you can make your dreams a reality. Have a fantastic day, and let's make this coming week amazing!");
                              break;
                    default:
                              console.log("Sorry, I don't recognize that day of the week.");
          }
}