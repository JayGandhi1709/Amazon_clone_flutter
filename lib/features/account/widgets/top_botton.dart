import 'package:amazon_clone/features/account/widgets/account_button.dart';
import 'package:flutter/material.dart';

class TopButtons extends StatelessWidget {
  const TopButtons({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            AccountButton(text: "Your Orders", onPressed: () {}),
            AccountButton(text: "Turn Seller", onPressed: () {}),
          ],
        ),
        SizedBox(height: 10),
        Row(
          children: [
            AccountButton(text: "Logout", onPressed: () {}),
            AccountButton(text: "Your Wishlist", onPressed: () {}),
          ],
        ),
      ],
    );
  }
}
