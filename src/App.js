import React, { useState, useEffect, useCallback } from 'react';
import { Gift, Sparkles, Heart, ArrowRight, TrendingUp, Award, Star, Zap } from 'lucide-react';

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // EDIT YOUR DATA HERE
  const people = {
    mom: {
      name: 'Mom',
      color: 'from-pink-500 to-rose-600',
      displayName: 'Mom',
      slides: [
        {
          type: 'intro',
          title: "Mom's Christmas",
          subtitle: 'Wrapped 2025'
        },
        {
          type: 'fact',
          title: 'This Year',
          description: 'Add your own memorable moment from 2025 here',
          emoji: '✨'
        },
        {
          type: 'stat',
          icon: 'heart',
          number: '365',
          label: 'Pages to Explore',
          description: 'A whole new world waiting for you'
        },
        {
          type: 'stat',
          icon: 'star',
          number: 'Countless',
          label: 'Hours of Enjoyment',
          description: 'Get cozy and dive in'
        },
        {
          type: 'gift',
          title: 'Your Gift',
          giftName: '[Book Title Here]',
          description: 'Add book description here',
          imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80'
        },
        {
          type: 'outro',
          message: 'Happy reading, Mom! 📚'
        }
      ]
    },
    dad: {
      name: 'Dad',
      color: 'from-blue-500 to-indigo-600',
      displayName: 'Dad',
      slides: [
        {
          type: 'intro',
          title: "Dad's Christmas",
          subtitle: 'Wrapped 2025'
        },
        {
          type: 'fact',
          title: 'This Year',
          description: 'Add your own memorable moment from 2025 here',
          emoji: '🔥'
        },
        {
          type: 'stat',
          icon: 'award',
          number: '2',
          label: 'Tickets to the Game',
          description: 'Front row to all the action'
        },
        {
          type: 'stat',
          icon: 'zap',
          number: '3',
          label: 'Periods of Play',
          description: 'Non-stop excitement on the ice'
        },
        {
          type: 'fact',
          title: 'Get Ready For...',
          description: 'Fast-paced action, incredible athleticism, and maybe a few fights',
          emoji: '🏒'
        },
        {
          type: 'stat',
          icon: 'sparkles',
          number: 'Live',
          label: 'In Person',
          description: 'Nothing beats being there'
        },
        {
          type: 'gift',
          title: 'Your Gift',
          giftName: 'Utah Mammoths Hockey Game',
          description: '2 tickets to see the Mammoths live - from John and me!',
          imageUrl: 'https://images.unsplash.com/photo-1515703407324-5f753afd8be8?w=800&q=80'
        },
        {
          type: 'outro',
          message: 'Let\'s go Mammoths! 🏒'
        }
      ]
    },
    natalieKim: {
      name: 'Natalie & Kim',
      color: 'from-purple-500 to-pink-600',
      displayName: 'Natalie & Kim',
      isShared: true,
      recipients: ['Natalie', 'Kim'],
      slides: [
        {
          type: 'intro',
          title: "Natalie & Kim's Christmas",
          subtitle: 'Wrapped 2025'
        },
        {
          type: 'personalnote',
          recipient: 'Natalie',
          icon: 'star',
          message: 'Add your personal note for Natalie here',
          emoji: '🎄'
        },
        {
          type: 'personalnote',
          recipient: 'Kim',
          icon: 'heart',
          message: 'Add your personal note for Kim here',
          emoji: '🎁'
        },
        {
          type: 'stat',
          icon: 'sparkles',
          number: '2x',
          label: 'The Fun',
          description: 'Because this gift is better together'
        },
        {
          type: 'stat',
          icon: 'heart',
          number: '100%',
          label: 'Cuteness Overload',
          description: 'Puppies + downward dog = pure joy'
        },
        {
          type: 'gift',
          title: 'Your Gift',
          giftName: 'Puppy Yoga Experience',
          description: 'Yoga + adorable puppies = the perfect combo for both of you!',
          imageUrl: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=800&q=80'
        },
        {
          type: 'outro',
          message: 'Hope you both love it! 🐶'
        }
      ]
    },
    john: {
      name: 'John',
      color: 'from-orange-500 to-red-600',
      displayName: 'John',
      slides: [
        {
          type: 'intro',
          title: "John's Christmas",
          subtitle: 'Wrapped 2025'
        },
        {
          type: 'fact',
          title: 'This Year',
          description: 'Add your own memorable moment from 2025 here',
          emoji: '🏎️'
        },
        {
          type: 'stat',
          icon: 'zap',
          number: '20+',
          label: 'Races to Watch',
          description: 'From Bahrain to Abu Dhabi'
        },
        {
          type: 'stat',
          icon: 'award',
          number: '10',
          label: 'Teams to Follow',
          description: 'Plus all the drama in between'
        },
        {
          type: 'gift',
          title: 'Your Gift',
          giftName: 'Formula 1 TV Subscription',
          description: 'Full season access - live races, replays, onboards, and all the action!',
          imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800&q=80'
        },
        {
          type: 'outro',
          message: 'Lights out and away you go! 🏁'
        }
      ]
    }
  };

  const nextSlide = useCallback(() => {
    const slides = people[selectedPerson]?.slides || [];
    if (currentSlide < slides.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsAnimating(false);
      }, 300);
    }
  }, [selectedPerson, currentSlide, isAnimating, people]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsAnimating(false);
      }, 300);
    }
  }, [currentSlide, isAnimating]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedPerson) return;
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAnimating, selectedPerson, nextSlide, prevSlide]);

  const getIcon = (iconName) => {
    const icons = {
      heart: Heart,
      trending: TrendingUp,
      award: Award,
      star: Star,
      zap: Zap,
      sparkles: Sparkles
    };
    const Icon = icons[iconName] || Star;
    return <Icon className="w-20 h-20" />;
  };

  if (!selectedPerson) {
    return (
      <div className="min-h-screen bg-black text-white overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-red-900 to-green-900 opacity-50 animate-pulse" 
             style={{ animationDuration: '8s' }} />
        
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              <Sparkles className="w-3 h-3 text-yellow-300 opacity-40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="w-full max-w-6xl px-4 sm:px-0">
            <div className="text-center space-y-12 mb-16">
              <Gift className="w-24 h-24 sm:w-32 sm:h-32 text-green-400 mx-auto animate-bounce" 
                   style={{ animationDuration: '2s' }} />
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight bg-gradient-to-r from-green-400 via-red-400 to-green-400 bg-clip-text text-transparent animate-gradient px-4"
                  style={{ backgroundSize: '200% auto' }}>
                Christmas Wrapped
              </h1>
              <p className="text-3xl sm:text-4xl font-bold text-red-400">2025</p>
              <p className="text-lg sm:text-2xl text-gray-300 px-4">Select your name to unwrap your gift</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {Object.entries(people).map(([key, person]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedPerson(key);
                    setCurrentSlide(0);
                  }}
                  className="group relative overflow-hidden rounded-3xl p-6 sm:p-8 backdrop-blur-lg border-2 border-white border-opacity-20 hover:border-opacity-40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${person.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  <div className="relative">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${person.color} mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <p className="text-xl sm:text-2xl font-bold">{person.displayName}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    );
  }

  const person = people[selectedPerson];
  const slide = person.slides[currentSlide];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-red-900 to-green-900 opacity-50 animate-pulse" 
           style={{ animationDuration: '8s' }} />
      
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-300 opacity-60" />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setSelectedPerson(null);
          setCurrentSlide(0);
        }}
        className="fixed top-8 left-8 z-20 px-6 py-3 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all text-sm font-medium flex items-center gap-2"
      >
        <ArrowRight className="w-4 h-4 transform rotate-180" />
        Back
      </button>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
        <div 
          className={`w-full max-w-4xl transition-all duration-300 px-4 sm:px-0 ${
            isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        >
          {slide.type === 'intro' && (
            <div className="text-center space-y-8 animate-fade-in">
              <h1 className="text-6xl sm:text-8xl font-black tracking-tight bg-gradient-to-r from-green-400 via-red-400 to-green-400 bg-clip-text text-transparent animate-gradient"
                  style={{ backgroundSize: '200% auto' }}>
                {slide.title}
              </h1>
              <p className="text-4xl sm:text-6xl font-bold text-red-400">{slide.subtitle}</p>
            </div>
          )}

          {slide.type === 'personalnote' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <p className="text-8xl mb-8 animate-bounce" style={{ animationDuration: '2s' }}>
                  {slide.emoji}
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-300 mb-8">For {slide.recipient}</h2>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-white border-opacity-20">
                <p className="text-2xl sm:text-3xl text-gray-200 text-center leading-relaxed">
                  {slide.message}
                </p>
              </div>
            </div>
          )}

          {slide.type === 'stat' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center space-y-8">
                <div className={`inline-block p-8 rounded-full bg-gradient-to-br ${person.color} shadow-2xl animate-pulse`}
                     style={{ animationDuration: '2s' }}>
                  {getIcon(slide.icon)}
                </div>
                <h1 className="text-7xl sm:text-9xl font-black tracking-tight">{slide.number}</h1>
                <p className="text-4xl sm:text-5xl font-bold text-gray-300">{slide.label}</p>
              </div>
              <p className="text-2xl sm:text-3xl text-gray-400 text-center max-w-2xl mx-auto leading-relaxed">
                {slide.description}
              </p>
            </div>
          )}

          {slide.type === 'fact' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <p className="text-8xl mb-8 animate-bounce" style={{ animationDuration: '2s' }}>
                  {slide.emoji}
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-300 mb-8">{slide.title}</h2>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-white border-opacity-20">
                <p className="text-2xl sm:text-3xl text-gray-200 text-center leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          )}

          {slide.type === 'gift' && (
            <div className="space-y-12 animate-fade-in">
              <div className="text-center">
                <Gift className={`w-24 h-24 mx-auto mb-8 text-green-400 animate-bounce`} 
                     style={{ animationDuration: '2s' }} />
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-300 mb-12">{slide.title}</h2>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl border border-white border-opacity-20">
                {slide.imageUrl && (
                  <div className="w-full h-60 sm:h-80 overflow-hidden">
                    <img 
                      src={slide.imageUrl} 
                      alt={slide.giftName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8 sm:p-12 space-y-6">
                  <h3 className={`text-4xl sm:text-5xl font-black text-center bg-gradient-to-r ${person.color} bg-clip-text text-transparent`}>
                    {slide.giftName}
                  </h3>
                  <p className="text-xl sm:text-2xl text-gray-300 text-center leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'outro' && (
            <div className="text-center space-y-12 animate-fade-in">
              <div className="flex justify-center space-x-6 mb-8">
                <Heart className="w-20 h-20 sm:w-24 sm:h-24 text-red-400 animate-pulse" />
                <Sparkles className="w-20 h-20 sm:w-24 sm:h-24 text-yellow-400 animate-bounce" />
                <Gift className="w-20 h-20 sm:w-24 sm:h-24 text-green-400 animate-pulse" />
              </div>
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-tight px-4">
                {slide.message}
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-400">Merry Christmas 2025</p>
            </div>
          )}
        </div>

        <div className="fixed bottom-8 left-0 right-0 flex justify-center items-center space-x-8 px-4">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ArrowRight className="w-6 h-6 transform rotate-180" />
          </button>

          <div className="flex space-x-3">
            {person.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-12 bg-white' 
                    : 'w-3 bg-white bg-opacity-40 hover:bg-opacity-60'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === person.slides.length - 1}
            className="p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>

        <div className="fixed top-8 right-8 text-right">
          <p className="text-sm text-gray-400 font-medium">
            {currentSlide + 1} / {person.slides.length}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default App;