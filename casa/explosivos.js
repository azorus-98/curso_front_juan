{
    "d": {
      "yOffset": 0,
      "outline": "OUTLINE",
      "version": 1,
      "text1Point": "CENTER",
      "glowType": "buttonOverlay",
      "animation": {
        "main": {
          "type": "none",
          "preset": "alphaPulse",
          "duration_type": "seconds"
        },
        "start": {
          "type": "preset",
          "preset": "slideleft",
          "duration_type": "seconds"
        },
        "finish": {
          "type": "preset",
          "preset": "fade",
          "duration_type": "seconds"
        }
      },
      "keepAspectRatio": false,
      "selfPoint": "BOTTOM",
      "cooldownEdge": false,
      "cooldownTextEnabled": true,
      "stickyDuration": false,
      "text1Font": "Expressway",
      "auto": true,
      "text1Enabled": true,
      "desaturate": false,
      "xOffset": 0,
      "glow": false,
      "url": "https://wago.io/acGFpR6Zb/1",
      "actions": {
        "init": {
          "custom": "\nlocal showEnemyNameplates = false  -- Auto Enable Show Enemy Nameplates\nlocal alwaysShowNameplates = false -- Auto Enable Always Show Nameplates\n-- Assumes that you usually have them disabled. Will enable them when entering m+ dungeon and disable when exiting. Don't enable this if you usually are running with them enabled because it will still disable them. \n\n---------------------------------------\nlocal tidyplatesHeight = 15 \naura_env.test = false -- change to make all nameplates glow for testing \naura_env.nameplates = {}\n\nlocal getNameplate = function(unit)\n    \n    local nameplate = C_NamePlate.GetNamePlateForUnit(unit)\n    if not nameplate then return nil end\n    \n    if nameplate.UnitFrame and nameplate.UnitFrame.HealthBar then\n        return nameplate.UnitFrame.HealthBar\n    elseif nameplate.kui then\n        return nameplate.kui.HealthBar\n    elseif nameplate.extended then\n        -- tidyplates\n        nameplate.extended.visual.healthbar:SetHeight(tidyplatesHeight)\n        return nameplate.extended.visual.healthbar\n    elseif nameplate.UnitFrame then \n        -- default\n        return nameplate.UnitFrame.healthBar\n    end\n    return nil\nend\n\naura_env.glow = function(unit,show)\n    local nameplate = getNameplate(unit)\n    if not nameplate then return end\n    if aura_env.config.enableGlow and show then\n        ActionButton_ShowOverlayGlow(nameplate)\n        aura_env.nameplates[unit] = nameplate\n    else\n        ActionButton_HideOverlayGlow(nameplate)\n        aura_env.nameplates[unit] = nil\n    end \nend\n\naura_env.orbs = 0\n\naura_env.marksBlocked = false\naura_env.autoEnemyNameplates = showEnemyNameplates\naura_env.autoAllNameplates = alwaysShowNameplates\n-- aura_env.allLines = {}\n\nlocal showLines = function(lines)\n    lines.v:Show()\n    lines.h:Show() \n    lines.visible = true\nend\n\nlocal hideLines = function(lines)\n    lines.v:Hide()\n    lines.h:Hide() \n    lines.visible = false\nend\n\naura_env.addLinesToNameplate = function(unit)\n    local nameplate = getNameplate(unit)\n    if nameplate then\n        \n        if not nameplate.lines then\n            \n            ---local frame = CreateFrame(\"Frame\")\n            local colour = aura_env.config.lineColour\n            \n            local v = nameplate:CreateTexture(nil,'ARTWORK',nil,1)\n            v:SetTexture('interface/buttons/white8x8')\n            v:SetVertexColor(unpack(colour))\n            v:SetHeight(aura_env.config.lineLength)\n            v:SetWidth(aura_env.config.lineThickness)\n            \n            local h = nameplate:CreateTexture(nil,'ARTWORK',nil,1)\n            h:SetTexture('interface/buttons/white8x8')\n            h:SetVertexColor(unpack(colour))\n            h:SetHeight(aura_env.config.lineThickness)\n            h:SetWidth(aura_env.config.lineLength)\n            \n            v:SetPoint('CENTER',nameplate)\n            h:SetPoint('CENTER',nameplate)\n            \n            nameplate.lines = {}\n            nameplate.lines.v = v\n            nameplate.lines.h = h\n            \n            showLines(nameplate.lines)\n            \n            -- aura_env.allLines[unit] = true\n            \n            return nameplateUnit\n        elseif nameplate.lines and not nameplate.lines.visible then\n            showLines(nameplate.lines)\n        end\n    end\n    return true\nend\n\naura_env.removeLinesFromNameplate = function(unit)\n    local nameplate = getNameplate(unit)\n    if nameplate and nameplate.lines and nameplate.lines.visible then\n        hideLines(nameplate.lines)\n    end\nend\n\n\n\n",
          "do_custom": true
        },
        "start": {
          "sound": "Interface\\AddOns\\WeakAuras\\Media\\Sounds\\BoxingArenaSound.ogg",
          "custom": "\n\n\n\n\n\n\n\n\n\n\n",
          "do_sound": false,
          "do_custom": false
        },
        "finish": {
          "custom": "for i,v in pairs(aura_env.nameplates) do\n    --print(i,v)\n    ActionButton_HideOverlayGlow(v)\nend\n\nfor i=1,40 do\n    local unit = \"nameplate\"..i \n    if UnitExists(unit) then\n        aura_env.removeLinesFromNameplate(unit)\n    end\nend\n\nif aura_env.autoEnemyNameplates then SetCVar(\"nameplateShowEnemies\",0) end\nif aura_env.autoAllNameplates then SetCVar(\"nameplateShowAll\",0) end\n\n\n",
          "do_custom": true
        }
      },
      "uid": "B8Evu)SD7Io",
      "authorOptions": [
        {
          "type": "header",
          "width": 1,
          "useName": true,
          "text": "General"
        },
        {
          "type": "description",
          "width": 1,
          "text": "Glow nameplates",
          "fontSize": "medium"
        },
        {
          "desc": "Glow explosive nameplates",
          "width": 1,
          "name": "Enable",
          "type": "toggle",
          "useDesc": true,
          "key": "enableGlow",
          "default": true
        },
        {
          "type": "description",
          "width": 1,
          "text": "Display icon",
          "fontSize": "medium"
        },
        {
          "desc": "Show icon with explosives count",
          "width": 1,
          "name": "Enable",
          "type": "toggle",
          "useDesc": true,
          "key": "enableIcon",
          "default": true
        },
        {
          "type": "description",
          "width": 1,
          "text": "Auto-mark",
          "fontSize": "medium"
        },
        {
          "desc": "Automatically mark explosives",
          "width": 1,
          "name": "Enable",
          "type": "toggle",
          "useDesc": true,
          "key": "enableMarks",
          "default": false
        },
        {
          "type": "header",
          "width": 2,
          "useName": true,
          "text": "Crosshair"
        },
        {
          "desc": "Display crosshair on explosive nameplates",
          "width": 1,
          "name": "Enable",
          "type": "toggle",
          "useDesc": true,
          "key": "enableLines",
          "default": true
        },
        {
          "desc": "Set the colour of lines",
          "width": 1,
          "name": "Colour",
          "type": "color",
          "useDesc": true,
          "key": "lineColour",
          "default": [
            1,
            0,
            0,
            1
          ]
        },
        {
          "step": 10,
          "width": 1,
          "min": 10,
          "desc": "Set the crosshair size",
          "max": 3000,
          "key": "lineLength",
          "type": "range",
          "useDesc": true,
          "name": "Size",
          "default": 300
        },
        {
          "step": 1,
          "width": 1,
          "min": 1,
          "desc": "Set the crosshair thickness",
          "key": "lineThickness",
          "max": 8,
          "type": "range",
          "useDesc": true,
          "name": "Thickness",
          "default": 1
        },
        {
          "type": "header",
          "width": 2,
          "useName": true,
          "text": "Misc"
        },
        {
          "step": 1,
          "width": 1,
          "min": 1000,
          "desc": "The ID of explosive orb (DO NOT CHANGE)",
          "max": 1000000,
          "key": "npcId",
          "type": "number",
          "useDesc": true,
          "name": "NPC ID",
          "default": 120651
        },
        {
          "width": 2,
          "type": "space",
          "height": 10,
          "useHeight": true,
          "variableWidth": true
        }
      ],
      "text2Color": [
        0.95294117647059,
        1,
        0.83921568627451,
        1
      ],
      "anchorFrameType": "SCREEN",
      "text1FontSize": 40,
      "text2Point": "LEFT",
      "height": 80,
      "config": {
        "npcId": 120651,
        "lineLength": 300,
        "enableLines": true,
        "enableGlow": true,
        "enableIcon": true,
        "enableMarks": false,
        "lineColour": [
          1,
          0,
          0,
          1
        ],
        "lineThickness": 1
      },
      "alpha": 1,
      "width": 80,
      "text2Font": "Expressway",
      "text1Containment": "INSIDE",
      "icon": true,
      "id": "Explosives Enhanced",
      "customTextUpdate": "update",
      "internalVersion": 11,
      "color": [
        1,
        1,
        1,
        1
      ],
      "text2Enabled": true,
      "text2FontSize": 24,
      "anchorPoint": "CENTER",
      "justify": "LEFT",
      "text2": "ORBS:",
      "regionType": "icon",
      "zoom": 0,
      "text1FontFlags": "THICKOUTLINE",
      "frameStrata": 1,
      "useglowColor": false,
      "displayIcon": "135799",
      "conditions": [],
      "customText": "function()\n    return  aura_env.orbs\nend\n\n\n\n",
      "cooldownSwipe": true,
      "text1": "%c",
      "inverse": false,
      "load": {
        "affixes": {
          "single": 13,
          "multi": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            true
          ]
        },
        "use_difficulty": true,
        "talent": {
          "multi": []
        },
        "use_affixes": true,
        "spec": {
          "multi": []
        },
        "role": {
          "multi": []
        },
        "talent2": {
          "multi": []
        },
        "use_never": false,
        "size": {
          "single": "party",
          "multi": {
            "party": true
          }
        },
        "faction": {
          "multi": []
        },
        "class": {
          "multi": []
        },
        "ingroup": {
          "multi": []
        },
        "race": {
          "multi": []
        },
        "use_encounterid": false,
        "use_size": true,
        "difficulty": {
          "single": "challenge",
          "multi": {
            "mythic": true,
            "challenge": true
          }
        },
        "pvptalent": {
          "multi": []
        }
      },
      "glowColor": [
        1,
        1,
        1,
        1
      ],
      "triggers": {
        "1": {
          "untrigger": {
            "custom": "function()\n    return true\nend\n\n\n\n\n\n\n\n"
          },
          "trigger": {
            "custom_hide": "timed",
            "debuffType": "HELPFUL",
            "subeventSuffix": "_CAST_START",
            "names": [],
            "custom": "function()\n    local _,type = GetInstanceInfo()\n    if (type == 'party' or aura_env.test) and (GetCVar(\"nameplateShowAll\")==\"0\" or GetCVar(\"nameplateShowEnemies\") == \"0\" ) then \n        if aura_env.autoEnemyNameplates then SetCVar(\"nameplateShowEnemies\",1) end\n        if aura_env.autoAllNameplates then SetCVar(\"nameplateShowAll\",1) end\n    end\n    local orbsUp = 0\n    local markIndex = 1\n    for i=1,40 do\n        local unit = \"nameplate\"..i \n        -- print(unit)\n        if UnitExists(unit) then\n            local guid = UnitGUID(unit)\n            local type, zero, server_id, instance_id, zone_uid, npc_id, spawn_uid = strsplit(\"-\",guid)\n            -- print(npc_id)\n            \n            if aura_env.config.npcId == tonumber(npc_id) or aura_env.test then\n                \n                orbsUp = orbsUp + 1\n                \n                if aura_env.config.enableLines then\n                    aura_env.addLinesToNameplate(unit)\n                else\n                    aura_env.removeLinesFromNameplate(unit)\n                end\n                \n                aura_env.glow(unit,true)\n                if aura_env.config.enableMarks and not GetRaidTargetIndex(unit) and not aura_env.marksBlocked then \n                    SetRaidTarget(unit,markIndex)\n                    if not GetRaidTargetIndex(unit) then\n                        aura_env.marksBlocked = true\n                        C_Timer.After(0.1,function() WeakAuras.ScanEvents('WA_RETRYMARKS') end)\n                    end\n                end\n                markIndex = markIndex<=8 and markIndex+1 or 1\n            else\n                aura_env.removeLinesFromNameplate(unit)\n                aura_env.glow(unit,false)\n            end\n        end\n    end\n    aura_env.orbs = orbsUp\n    if  aura_env.config.enableIcon and orbsUp > 0 then\n        WeakAuras.regions[aura_env.id].region:SetAlpha(1)\n    else\n        for i,v in pairs(aura_env.nameplates) do\n            ActionButton_HideOverlayGlow(v)\n        end\n        \n        WeakAuras.regions[aura_env.id].region:SetAlpha(0)\n        return false\n        \n    end\n    return true\nend",
            "genericShowOn": "showOnActive",
            "subeventPrefix": "SPELL",
            "unit": "player",
            "event": "Health",
            "type": "custom",
            "custom_type": "status",
            "spellIds": [],
            "check": "update"
          }
        },
        "2": {
          "untrigger": [],
          "trigger": {
            "custom_hide": "timed",
            "custom": "function(e,unit)\n    aura_env.marksBlocked = false\n    return false\nend\n\n\n\n",
            "subeventPrefix": "SPELL",
            "events": "WA_RETRYMARKS",
            "event": "Health",
            "type": "custom",
            "subeventSuffix": "_CAST_START",
            "genericShowOn": "showOnActive",
            "custom_type": "event"
          }
        },
        "customTriggerLogic": "",
        "activeTriggerMode": -10,
        "disjunctive": "any"
      },
      "text2FontFlags": "THICKOUTLINE",
      "text1Color": [
        1,
        1,
        1,
        1
      ],
      "displayText": "%c",
      "text2Containment": "OUTSIDE",
      "semver": "1.0.0"
    },
    "m": "d",
    "s": "2.11.6",
    "v": 1421,
    "wagoID": "acGFpR6Zb"
  }