const reelsData = [
    {
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./videos/tailwinderDog.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "travelwithsam",
        likeCount: 9820,
        isLiked: false,
        commentCount: 210,
        shareCount: 65,
        isFollowed: false,
        caption: "Sunsets hit differently when you're far from home 🌅",
        video: "https://player.vimeo.com/external/403787754.sd.mp4?s=751ee292a7d12075b1219777084ff57ac4fe8f6a&profile_id=139&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "fitnessfreak",
        likeCount: 21400,
        isLiked: false,
        commentCount: 890,
        shareCount: 144,
        isFollowed: false,
        caption: "No excuses. Only results. 💪",
        video: "https://player.vimeo.com/external/389953115.sd.mp4?s=086abca33ccce1ce01a01694d94be87cb528b04f&profile_id=139&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "foodiequeen",
        likeCount: 12650,
        isLiked: false,
        commentCount: 330,
        shareCount: 70,
        isFollowed: false,
        caption: "If eating is a hobby, then I’m a professional 😌✨",
        video: "https://player.vimeo.com/external/209220772.sd.mp4?s=b628266cb14afb3e8ceea1f63eb694a7f2a7bc01&profile_id=164&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "urban.snap",
        likeCount: 17890,
        isLiked: false,
        commentCount: 510,
        shareCount: 110,
        isFollowed: false,
        caption: "City lights > everything else.",
        video: "https://player.vimeo.com/external/331511974.sd.mp4?s=d545f2c051f7ed3d6fbaf0a2f03c2d796ff51697&profile_id=139&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "doggo_world",
        likeCount: 32000,
        isLiked: false,
        commentCount: 860,
        shareCount: 220,
        isFollowed: false,
        caption: "Just a dog making your day better 🐶💛",
        video: "https://player.vimeo.com/external/371623630.sd.mp4?s=608646f26d2f0cb9d989cd803cc4ed2cf81cd7c7&profile_id=139&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "techinsider",
        likeCount: 9100,
        isLiked: false,
        commentCount: 190,
        shareCount: 75,
        isFollowed: false,
        caption: "This gadget changed everything.",
        video: "https://player.vimeo.com/external/310453586.sd.mp4?s=36fdf6b2fda5270641edcfc7e9ccb2fdbef674e7&profile_id=139&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=930&auto=format&fit=crop"
    },

    {
        username: "bikerlife",
        likeCount: 24450,
        isLiked: false,
        commentCount: 640,
        shareCount: 150,
        isFollowed: false,
        caption: "Life is better on two wheels 🏍️🔥",
        video: "https://player.vimeo.com/external/310438002.sd.mp4?s=1a01444760c63375783a7ab7c4b2ba4f7ced2c14&profile_id=139&oauth2_token_id=57447761",
        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=930&auto=format&fit=crop"
    }
];




var sum = '';

reelsData.forEach((elem)=>{
    sum = sum + `<div class="reel">
            <video src=${elem.video} autoplay loop muted></video>
            <div class="bottom">
              <div class="user">
                <img src=${elem.userprofile} alt="" />
                <h4>${elem.username}</h4>
                <button>${elem.isFollowed}</button>
              </div>
              <h3>
                ${elem.caption}
              </h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like-icon"><i class="ri-heart-line"></i></h4>
                <h6>${elem.likeCount}</h6>
              </div>

              <div class="comment">
                <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                <h6>${elem.commentCount}</h6>
              </div>

              <div class="share">
                <h4 class="share-icon"><i class="ri-send-plane-line"></i></h4>
                 <h6>${elem.shareCount}</h6>
              </div>

              <div class="save">
                <h4 class="save-icon"><i class="ri-bookmark-line"></i></h4>
              </div>

              <div class="dot">
                <h4 class="dot-icon"><i class="ri-more-2-line"></i></h4>
              </div>
            </div>
          </div>`
})

var allReels = document.querySelector(".all-reels");

allReels.innerHTML = sum
