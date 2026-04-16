document.addEventListener("DOMContentLoaded", () => {
    
    // Using your LeetCode username
    const username = "mdsaqib0413"; 
    const apiUrl = `https://alfa-leetcode-api.onrender.com/${username}/solved`;
    
    // We are only targeting the specific span with the number inside
    const lcCountElement = document.getElementById("lc-count");

    async function fetchLeetCodeStats() {
        try {
            const response = await fetch(apiUrl);
            
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            
            const data = await response.json();
            
            // If the API successfully returns a number, we swap out "90+" with the live count seamlessly
            if (data && data.solvedProblem) {
                lcCountElement.textContent = data.solvedProblem;
            }

        } catch (error) {
            console.error("Error fetching LeetCode stats:", error);
            // If the API fails, it just leaves the default "90+" that is already in your HTML so the site doesn't break!
        }
    }

    fetchLeetCodeStats();
});