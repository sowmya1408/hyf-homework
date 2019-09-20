
        const seriesDurations = [
            {
              title: 'Game of thrones',
              days: 3,
              hours: 1,
              minutes: 0,  
            },
            { 
              title: 'Friends',
              days: 12,
              hours: 20,
              minutes: 24,
            },
            {
              title: 'The Little Mermaid',
              days: 13,
              hours: 7,
              minutes: 46,
            }
              
          ]
          let total = 0;
        for (let i = 0; i < seriesDurations.length; i++) {
           const totalMinutesToHours = seriesDurations[i].minutes/ 60;
           const totalHours = totalMinutesToHours + seriesDurations[i].hours;
           const totalHoursToDays = (totalHours/ 24);
           const totalDays = totalHoursToDays + seriesDurations[i].days;
           const totalYears = Number((totalDays/ 365).toFixed(3));
           const avgLifeSpan = 80;
           const percentForEachSeries = Number((totalYears * 100 / avgLifeSpan).toFixed(2));
           seriesDurations[i].years = percentForEachSeries; 
           const titlesOfEachSeries = seriesDurations[i].title;
           console.log((`${titlesOfEachSeries} took ${percentForEachSeries}% of my life`));
           total += seriesDurations[i].years;

        }  console.log(`In total that is ${total}% of my life`);          
        // console.log(seriesDurations); to check of the years are added to the objects


