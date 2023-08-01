import 'package:amazon_clone/constants/global_variables.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

class CarouselImage extends StatelessWidget {
  const CarouselImage({super.key});

  @override
  Widget build(BuildContext context) {
    return CarouselSlider.builder(
      itemCount: GlobalVariables.carouselImages.length,
      itemBuilder: (BuildContext context, int index, int realIndex) {
        return Image.network(
          GlobalVariables.carouselImages[index],
          fit: BoxFit.cover,
          height: 200,
        );
      },
      options: CarouselOptions(
        viewportFraction: 1,
        height: 200,
      ),
    );
  }
}
