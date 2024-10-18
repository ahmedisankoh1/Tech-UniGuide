const filterBtn = document.getElementById('filter-btn');
    const locationFilter = document.getElementById('location-filter');
    const courseFilter = document.getElementById('course-filter');
    const typeFilter = document.getElementById('type-filter');
    const universityCards = document.querySelectorAll('.university-card');

    filterBtn.addEventListener('click', filterUniversities);

    function filterUniversities() {
      const locationValue = locationFilter.value.toLowerCase();
      const courseValue = courseFilter.value.toLowerCase();
      const typeValue = typeFilter.value.toLowerCase();

      universityCards.forEach(card => {
        const location = card.querySelector('p:nth-of-type(1)').textContent.toLowerCase();
        const type = card.querySelector('p:nth-of-type(2)').textContent.toLowerCase();
        const courses = Array.from(card.querySelectorAll('li')).map(li => li.textContent.toLowerCase()).join(', ');

        // Checking if university matches the filters
        const matchesLocation = !locationValue || location.includes(locationValue);
        const matchesCourse = !courseValue || courses.includes(courseValue);
        const matchesType = !typeValue || type.includes(typeValue);

        if (matchesLocation && matchesCourse && matchesType) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
