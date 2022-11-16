'''
Author: Kieran Ahn

This module contains functions for use in 
comparing two images and displaying the 
differences between them. If called from
the command line, will display the difference
between two images to the user.

Adapted from tutorial: https://pyimagesearch.com/2017/06/19/image-difference-with-opencv-and-python/
'''
from skimage.metrics import structural_similarity
import cv2
import imutils
import numpy as np

def compare(img1, img2, *, onlyBoxes=False):
    '''
    Takes in two images and labels the differences between them.

    :img1: an image represented as a numpy array
    :img2: an image represented as a numpy array

    returns: a tuple containing the two images with their differences
    highlighted in color-coded boxes.
    '''
    grey1 = cv2.cvtColor(img1, cv2.COLOR_BGR2GRAY)
    grey2 = cv2.cvtColor(img2, cv2.COLOR_BGR2GRAY)

    difference = structural_similarity(grey1, grey2, full=True)[1]
    difference = (difference * 255).astype("uint8")

    threshold = cv2.threshold(difference, 0, 255, cv2.THRESH_BINARY_INV | cv2.THRESH_OTSU)[1]

    contours = imutils.grab_contours(cv2.findContours(threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE))

    if onlyBoxes:
        alpha1 = np.zeros((img1.shape[0], img2.shape[1], 1), np.uint8)
        img1 = np.dstack((img1, alpha1))

        alpha2 = np.zeros((img2.shape[0], img2.shape[1], 1), np.uint8)
        img2 = np.dstack((img2, alpha2))

    for difference_found in contours: 
        box_color = [int(np.random.choice(range(255))) for i in range(3)]
        if onlyBoxes:
            box_color.insert(255)
        (x, y, w, h) = cv2.boundingRect(difference_found)
        cv2.rectangle(img1, (x, y), (x + w, y + h), tuple(box_color), 1)
        cv2.rectangle(img2, (x, y), (x + w, y + h), tuple(box_color), 1)
    
    return (img1, img2)


if __name__ == '__main__':
    import sys
    if len(sys.argv) != 3:
        sys.exit("2 arguments required: paths to images which you wish to compare.")

    firstImg = cv2.imread(sys.argv[1])
    secondImg = cv2.imread(sys.argv[2])

    (compared1, compared2) = compare(firstImg, secondImg)
    cv2.imshow("Image 1", compared1)
    cv2.imshow("Image 2", compared2)

    cv2.waitKey(0)

