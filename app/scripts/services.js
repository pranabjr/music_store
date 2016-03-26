'use strict';

angular.module('musicApp')

        .service('menuFactory', function() {
    
            var albums=[
                         {
                          _id:0,
                          name:'Science and Faith',
                          image: 'images/alb3.jpg',
                          category: 'rock', 
                          label:'Hot',
                          price:'15.00',
                          Artist:'The Script',
                          description:'Science & Faith is the second studio album by Irish pop rock band The Script. It was released in Ireland on 10 September 2010, via RCA Records. It was preceded by the lead single, "For the First Time", on 3 September 2010. It debuted at number one in Ireland and United Kingdom, selling 70,816 copies in its first week in the United Kingdom.[8] In the United States, Science & Faith debuted at number three on the Billboard 200 with first-week sales of 49,000 copies. The album has sold 314,000 copies in the US, and over 1.5 million worldwide.',
                              
                             comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                        {
                          
                          _id:1,
                          name:'Do Wops & Hooligans',
                          image: 'images/alb4.jpg',
                          category: 'techno', 
                          label:'Hot',
                          price:'15.00',
                          Artist:'Bruo Mars',
                          description:"Doo-Wops & Hooligans is the debut studio album by American singer Bruno Mars. It was released on October 4, 2010, by Atlantic Records and Elektra Records. Mars' writing and production team The Smeezingtons were credited with writing all songs and serve as the album's executive producers. The album's title refers to doo-wop music and was chosen to reflect simplicity, as well as appeal to both males and females. Two digital singles—'Liquor Store Blues' featuring Damian Marley and 'Grenade'—were released to promote the album.",
                              
                             comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                        {
                          _id:2,
                          name:'Planet Pit', 
                          image: 'images/alb5.jpg',
                          category: 'techno', 
                          label:'New',
                          price:'20.00',
                          Artist:'PitBull',
                          description:'Planet Pit is the sixth studio album by the American rapper Pitbull; it was released on June 17, 2011, by Polo Grounds Music, Mr. 305 Entertainment, Sony Music and J Records. Production was handled by a variety of pop and hip hop producers including David Guetta, RedOne, Dr. Luke, Jim Jonsin, and Soulshock.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                        {
                          _id:3,
                          name:'Night Visions', 
                          image: 'images/alb6.jpg',
                          category: 'rock', 
                          label:'Popular',
                          price:'20.99',
                          Artist:'Imagine Dragons',
                          description:"Night Visions is the debut studio album by American indie rock band Imagine Dragons. It was released on September 4, 2012 through Interscope Records. The extended track was released on February 12, 2013, adding three more songs. Recorded between 2010 and 2012, the album was primarily produced by the band themselves, as well as English hip-hop producer Alex da Kid and Brandon Darner from the American indie rock group The Envy Corps. It was mastered by Joe LaPorta. According to frontman Dan Reynolds, the album took three years to finish,[4] with six of the album's tracks being previously released on multiple EPs. Musically, Night Visions exhibits influences of folk, hip hop and pop.",
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                
                        {
                          _id:4,
                          name:'Native', 
                          image: 'images/alb7.jpg',
                          category: '', 
                          label:'Popular',
                          price:'25.99',
                          Artist:'One Republic',
                          description:'Native is the third studio album by American pop rock band OneRepublic. It was released on March 22, 2013 in Germany and Ireland, March 25 worldwide except North America, and March 26 in North America. The album was originally planned to be released at the end of 2012 with the lead single being "Feel Again", which was released on August 27, 2012. However, due to the album not being completed at the time, it was pushed back to early 2013. "Feel Again" was later branded as a promotional single, and on January 8, 2013, "If I Lose Myself" was released as the lead single for the album.',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                        
                        {
                          _id:5,
                          name:'Nothing But the Beat', 
                          image: 'images/alb9.jpg',
                          category: 'techno', 
                          label:'New',
                          price:'15.99',
                          Artist:'David Guetta',
                          description:"Nothing but the Beat is the fifth studio album by French DJ and record producer David Guetta, released on August 26, 2011. Released as a double album, the first disc features collaborations with artists from the R&B, hip hop and pop worlds such as Lil Wayne, Taio Cruz, Nicki Minaj, Ludacris, Snoop Dogg, Afrojack, Chris Brown, Flo Rida, Usher, Jennifer Hudson, Dev, Timbaland, Jessie J and Sia. Also making appearances are will.i.am, Akon and Ne-Yo, all three of whom previously collaborated with Guetta on his fourth album, One Love. In comparison, the second disc features purely instrumental tracks.The album is also Guetta's first album not to feature long-time collaborator Chris Willis on vocals.",
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        },
                
                        {
                          _id:6,
                          name:'The 50 Greatest Pieces of Classical Music', 
                          image: 'images/alb10.jpg',
                          category: 'classical', 
                          label:'New - 50% Discount',
                          price:'10.00',
                          Artist:'London Philharmonic Orchestra',
                          description:'The 50 Greatest Pieces of Classical Music is a selection of classical works recorded by the London Philharmonic Orchestra, with conductor David Parry.This recording was made in September 2009 at Abbey Road Studios, Royal Festival Hall and Henry Wood Hall in London. The result was solely for the digital market. This is the very first time a classical collection is recorded for digital release only and was 13th place on the Billboard classical music chart with more than 135,000 units sold (and counting).',
                           comments: [
                               {
                                   rating:5,
                                   comment:"Imagine all the eatables, living in conFusion!",
                                   author:"John Lemon",
                                   date:"2012-10-16T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
                                   author:"Paul McVites",
                                   date:"2014-09-05T17:57:28.556094Z"
                               },
                               {
                                   rating:3,
                                   comment:"Eat it, just eat it!",
                                   author:"Michael Jaikishan",
                                   date:"2015-02-13T17:57:28.556094Z"
                               },
                               {
                                   rating:4,
                                   comment:"Ultimate, Reaching for the stars!",
                                   author:"Ringo Starry",
                                   date:"2013-12-02T17:57:28.556094Z"
                               },
                               {
                                   rating:2,
                                   comment:"It's your birthday, we're gonna party!",
                                   author:"25 Cent",
                                   date:"2011-12-02T17:57:28.556094Z"
                               }
                               
                           ]
                        }
                        ];
           
            
    var newArr=[
        {
            _id:0,
            name:"Planet Pit",
            image: 'images/alb5.jpg',
            label:'new',
            price:'20.00',
            artist:'PitBull'
            
        },
        {
            _id:1,
            name:"Science and Faith",
            image: 'images/alb3.jpg',
            label:'new',
            price:'20.00',
            artist:'The Script'
            
        },
        {
            _id:2,
            name:"Native",
            image: 'images/alb7.jpg',
            label:'new',
            price:'20.00',
            artist:'One Republic'
            
        }
    ];
            var promotions = [
                {
                          _id:0,
                          name:'The 50 Greatest Pieces of Classical Music', 
                          image: 'images/alb10.jpg',
                          label:'50% discount',
                          price:'10.00',
                          description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
                }
                
            ];
    
                this.getDishes = function(){
                    
                    return albums;
                    
                };
    
                this.getDish = function (index) {
                    
                    return albums[index];
                };

                this.getPromotions = function(){
                    
                    return promotions;
                    
                };

                this.getPromotion=function(index){
                  return promotions[index];
                };
    
                this.getNew=function(){
                    return newArr;
                }
    
                // implement a function named getPromotion
                // that returns a selected promotion.
    
                        
        })

        .factory('corporateFactory', function() {
    
            var corpfac = {};
    
            var leadership = [
                
                {
                    name: "Johnny Chang",
                    image: 'images/owner.jpg',
                    designation: "CEO",
                    abbr: "EC",
                    description: "Our CEO, Johnny, credits his hardworking Asian immigrant parents who undertook the arduous journey to the shores of America with the intention of giving their children the best future. He brings his zeal for music to this store, pioneering cross-cultural musical connections."
                },
                
                {
                    name: "Gracy Smith",
                    image: 'images/coo.jpg',
                    designation: "Chief Operating Officer",
                    abbr: "COO",
                    description: "Blessed with the most discerning gustatory sense, Gracy, our COO, personally ensures that everything runs well in the musicroom store. Our employees dread the tongue lashing that ensues if their work does not meet her exacting standards. Don't be fooled by her good looks."
                },
                {
                    name: "Walter Witherspoon",
                    image: 'images/cfo.jpg',
                    designation: "Chief Financial Officer",
                    abbr: "CFO",
                    description: "Our CFO, Wally, as he is affectionately referred to by his colleagues, comes from a long established family of business houses. His experiences working for them has made him a seasoned campaigner. We are lucky to have him on our team. As he puts it in his own words, Everything that runs, wins, and everything that stays, pays!"
                },
                {
                    name: "Henry Watson",
                          image: 'images/salesman.jpg',
                    designation: "Sales Person",
                    abbr: "SP",
                    description: "Voted by his colleagues as the best Salesman for two years running, Henry, is the pride of the musicroom. He takes his job seriously and maintains a friendly onnection with each and every customer. When Henry is around no customer is dissatisfied."
                }
                
                
            ];

            corpfac.getLeaders = function(){
                      return leadership;
                      };
                
            corpfac.getLeader = function (index) {
                      return leadership[index];
                      };
            
            return corpfac;
     
            // Implement two functions, one named getLeaders,
            // the other named getLeader(index)
            // Remember this is a factory not a service
    
    
        })

;
