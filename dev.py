#!/usr/bin/env python
#

# import modules used here -- sys is a very standard one
import sys, argparse, logging, os
from subprocess import call

# Gather our code in a main() function
def main(args, loglevel):
  logging.basicConfig(format="%(levelname)s: %(message)s", level=loglevel)
  #logging.debug("Your Argument: %s" % args.argument)
  logging.info("Xecle: rethinking spreadsheet")

  cwd = os.path.dirname(os.path.realpath(__file__))
  
  containers = {
    'descjop': 'xecle_descjop',
  }
  
  exit_code = call([
    "docker",
    "run",
    "-ti",
    "-v", "%s/app:/usr/src/app" % cwd,
    "-v", "/tmp/.X11-unix:/tmp/.X11-unix",
    "-e", "DISPLAY=unix$DISPLAY",
    "--name", containers['descjop'],
    "clojure:descjop"
  ])
  if exit_code != 0:
    call(["docker", "start", "-ia", containers['descjop']])
      

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
