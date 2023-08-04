import 'dart:io';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';

void showSnackBar(BuildContext context, String text) {
  ScaffoldMessenger.of(context).showSnackBar(
    SnackBar(
      content: Text(text),
    ),
  );
}

Future<List<File>> pickImage() async {
  List<File> images = [];
  final fileBytes = [];
  final fileName;
  try {
    var files = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowMultiple: true,
      allowedExtensions: [
        'jpg',
        'png',
        'webm',
      ],
    );

    // if (files != null && files.files.isNotEmpty) {
    //   fileBytes = files.files.first.bytes;
    //   fileName = files.files.first.name;

    //   // upload file

    //   // await FirebaseStorage.instance
    //   //     .ref('uploads/$fileName')
    //   //     .putData(fileBytes);
    // }

    if (files != null && files.files.isNotEmpty) {
      for (var i = 0; i < files.files.length; i++) {
        // fileBytes.add(files.files.first);
        print(files.files.first.bytes);
      }
    }

    // if (files != null && files.files.isNotEmpty) {
    //   for (var i = 0; i < files.files.length; i++) {
    //     images.add(File(files.files[i].path!));
    //   }
    // }
  } catch (e) {
    debugPrint(e.toString());
  }
  return images;
}

// Future<List<File>> pickImage() async {
//   List<File> images = [];
//   try {
//     var files = await FilePicker.platform.pickFiles(
//       type: FileType.image,
//       allowMultiple: true,
//     );
    
//     if(files != null && files.files.isNotEmpty){
//       for (var i = 0; i < files.files.length; i++) {
//         images.add(File(files.files[i].path!));
//       }
//     }
//   } catch (e) {
//     debugPrint(e.toString());
//   }
//   return images;
// }
