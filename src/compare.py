'''
Author: Kieran Ahn

This script compares two images and identifies the
differences between them.
'''
from skimage.metrics import structural_similarity
import cv2

if __name__ == '__main__':
    import sys
    if len(sys.argv) != 3:
        sys.exit("2 arguments required: paths to images which you wish to compare.")
        

    firstImg = cv2.imread(sys.argv[1])
    secondImg = cv2.imread(sys.argv[2])

    print("Successfully loaded images")

    #TODO: write the rest of the code, Kieran.