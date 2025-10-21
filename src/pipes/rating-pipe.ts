// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'rating'
// })
// export class RatingPipe implements PipeTransform {

//   transform(rating: number): string {
//     let fullStars = Math.floor(rating);
//     let hasHalfStar = rating - fullStars >= 0.5;
//     let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//     let starsHtml = '';

//     // Full stars
//     for (let i = 0; i < fullStars; i++) {
//       starsHtml += `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
//   }
//      // Half star
//     if (hasHalfStar) {
//       starsHtml += `<i class="fa-solid fa-star-half-stroke" style="color: #FFD43B;"></i>`;
//     }

//     // Empty stars
//     for (let i = 0; i < emptyStars; i++) {
//       starsHtml += `<i class="fa-light fa-star" style="color: #FFD43B;"></i>`;
//     }

//         return starsHtml;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rating: number): string {
    let fullStars = Math.floor(rating);
    let hasHalfStar = rating - fullStars >= 0.5;
    let emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHtml = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHtml += `<i class="fa-solid fa-star star-icon" ></i>`}

    // Half star
    if (hasHalfStar) {
      starsHtml += `<i class="fa-solid fa-star-half-stroke star-icon" style="color: #FFD43B;"></i>`;
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHtml += `<i class="fa-regular fa-star star-icon" ></i>`;
    }

    return starsHtml;
  }

}
