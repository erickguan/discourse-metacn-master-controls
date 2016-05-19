# name: Master Controls
# About: Internal for controlling master nodes for DiscourseCN
# author: Erick
# version: 0.99

PLUGIN_NAME = "master_controls".freeze

enabled_site_setting :master_controls_enabled

after_initialize do
  class ::ApplicationController
    def mini_profiler_enabled?
      defined?(Rack::MiniProfiler) && current_user&.single_sign_on_record&.external_id == 'fantasticfears'
    end
  end
end
