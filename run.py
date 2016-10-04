#!/usr/bin/env python

# import modules used here -- sys is a very standard one
import sys, argparse, logging, os
from subprocess import call

# Gather our code in a main() function
def main(args, loglevel):
  logging.basicConfig(format="%(levelname)s: %(message)s", level=loglevel)
  #logging.debug("Your Argument: %s" % args.argument)
  logging.info("Xecle: rethinking spreadsheet")

  print "[1] Code and develop"
  print "[2] Build container image (if you're first time here)"
  print "[3] Deploy executable packages"

  choice = float(input("What would you like to do? ") or 1)

  image = "clojure:descjop"

  if choice == 1:
    cwd = os.path.dirname(os.path.realpath(__file__))

    print "Run `electron app/dev --enable-logging` to code."

    containers = {
      'descjop': 'xecle_descjop',
    }

    call(["xhost", "+"])

    exit_code = call(["docker", "start", "-ia", containers['descjop']])
    if exit_code != 0:
      print "Creating new container..."
      call([
        "docker",
        "run",
        "-ti",
        "-v", "%s/app:/usr/src/app" % cwd,
        "-v", "/tmp/.X11-unix:/tmp/.X11-unix",
        "-v", "/var/run/dbus:/var/run/dbus",
        "-e", "DISPLAY=unix:0",
        "-e", "XAUTHORITY=/.Xauthority",
        "--name", containers['descjop'],
        image,
      ])

  # Build container image
  elif choice == 2:
    call(["docker", "build", "-t", image, '.'])

  # Deploy executables
  elif choice == 3:
    print "Not done yet"


# Standard boilerplate to call the main() function to begin
# the program.
if __name__ == '__main__':
  parser = argparse.ArgumentParser( 
    description = "The tool to develop and deploy this project.")

  parser.add_argument(
    "-v",
    "--version",
    action='version',
    version='%(prog)s (version 0.1)'
  )
  parser.add_argument(
    "-vv",
    "--verbose",
    help="increase output verbosity",
    action="store_true"
  )
  args = parser.parse_args()

  # Setup logging
  if args.verbose:
    loglevel = logging.DEBUG
  else:
    loglevel = logging.INFO

  main(args, loglevel)
